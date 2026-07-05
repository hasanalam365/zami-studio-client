import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {

                const userInfo = {
                    email: currentUser.email,
                    
                };

                const res = await axiosPublic.post("/jwt", userInfo);

                if (res.data.token) {
                    localStorage.setItem("access-token", res.data.token);
                }
            } else {
                localStorage.removeItem("access-token");
            }

            setLoading(false);
        });

        return () => unSubscribe();
    }, [axiosPublic]);

    return (
        <AuthContext.Provider value={{
            signUpUser,
            signInUser,
            updateUser,
            signOutUser,
            user,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;