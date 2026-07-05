import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { DNA } from "react-loader-spinner";
import FullScreenLoading from "../../Components/FullScreenLoading";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <FullScreenLoading></FullScreenLoading>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
};

export default PrivateRoute;