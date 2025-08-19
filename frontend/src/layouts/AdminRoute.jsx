import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../hooks/authStore";

const AdminRoute = () => {
    const user = useAuthStore((state) => state.user);
    const isAuthenticated = !!user;
    const isAdmin = Array.isArray(user?.roles) && user.roles.includes("admin");
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    return isAdmin ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default AdminRoute;


