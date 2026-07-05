import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import { DNA } from "react-loader-spinner";
import FullScreenLoading from "../../Components/FullScreenLoading";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isPending] = useAdmin();
    const location = useLocation();

    if (loading || isPending) {
        return <FullScreenLoading></FullScreenLoading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;