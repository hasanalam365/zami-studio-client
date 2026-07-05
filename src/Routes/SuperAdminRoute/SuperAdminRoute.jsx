import { Navigate, useLocation } from "react-router-dom";
import useSuperAdmin from "../../Hooks/useSuperAdmin";
import useAuth from "../../Hooks/useAuth";
import FullScreenLoading from "../../Components/FullScreenLoading";

const SuperAdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isSuperAdmin, isPending] = useSuperAdmin();
  const location = useLocation();

  if (loading || isPending) {
    return <FullScreenLoading></FullScreenLoading>
  }

  if (user && isSuperAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SuperAdminRoute;