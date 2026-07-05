import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSuperAdmin = () => {

  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: isSuperAdmin = false,
    isPending
  } = useQuery({
    queryKey: ["isSuperAdmin", user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users/super-admin/${user.email}`
      );
      
      return res.data?.superAdmin;
    }
  });

  return [isSuperAdmin, isPending];
};

export default useSuperAdmin;