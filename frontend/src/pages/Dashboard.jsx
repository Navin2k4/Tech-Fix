import React from "react";
import { useAuthStore } from "../hooks/authStore";
import SignOutButton from "../components/SignOutButton";

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  console.log(user);
  
  return <div>Dashoard {user.name} <SignOutButton /></div>;
};

export default Dashboard;
