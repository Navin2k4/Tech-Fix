import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Could include sidebar/header here */}
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
