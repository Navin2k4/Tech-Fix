import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/*" element={<PublicRoutes />} />
      {/* Protected Routes */}
      <Route path="/app/*" element={<PrivateRoutes />} />
    </Routes>
  );
}

export default App;
