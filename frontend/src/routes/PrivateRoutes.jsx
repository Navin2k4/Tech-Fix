import { Routes, Route, Navigate } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";

const isAuthenticated = true; // replace with auth logic later

const PrivateRoutes = () => {
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        {/* Define your private route here */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
