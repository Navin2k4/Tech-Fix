import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../hooks/authStore.js";

const ProtectedUserRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedUserRoute;
