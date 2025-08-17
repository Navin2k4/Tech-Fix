import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import TestPage from "../pages/Testpage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        {/* Define your public routes here example */}
        <Route path="/" element={<TestPage />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
