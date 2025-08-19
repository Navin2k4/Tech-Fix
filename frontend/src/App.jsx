import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedUserRoute from "./layouts/ProtectedUserRoute";
import RequestCreate from "./pages/RequestCreate";
import RequestEdit from "./pages/RequestEdit";
import AdminRoute from "./layouts/AdminRoute";
import AdminOverview from "./pages/AdminOverview";
import AdminStaff from "./pages/AdminStaff";
import AdminUsers from "./pages/AdminUsers";
import AdminRequestInsights from "./pages/AdminRequestInsights";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedUserRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/requests/new" element={<RequestCreate />} />
        <Route path="/dashboard/requests/:id/edit" element={<RequestEdit />} />
      </Route>

      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminOverview />} />
        <Route path="/admin/staff" element={<AdminStaff />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/insights" element={<AdminRequestInsights />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
