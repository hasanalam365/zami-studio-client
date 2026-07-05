import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { signOutUser } = useAuth();

  useEffect(() => {

    // 🔐 REQUEST INTERCEPTOR (Attach JWT Token)
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 🚨 RESPONSE INTERCEPTOR (Handle 401 / 403)
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {

        if (error.response?.status === 401 || error.response?.status === 403) {
          try {
            await signOutUser();
            localStorage.removeItem("access-token");

            // Soft redirect (better than hard reload)
            navigate("/login");
          } catch (logoutError) {
            console.log("Logout error:", logoutError);
          }
        }

        return Promise.reject(error);
      }
    );

    // 🧹 CLEANUP
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };

  }, [navigate, signOutUser]);

  return axiosSecure;
};

export default useAxiosSecure;