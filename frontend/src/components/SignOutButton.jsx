import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../hooks/authStore";
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";

const SignOutButton = () => {
  const navigate = useNavigate();
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const handleSignOut = async () => {
    try {
      await axiosInstance.post("/auth/signout", {});
      //   withCredentials : Include cookies (like accessToken and refreshToken) in the request.
      //   {} : empty body
      clearAuth();
      navigate("/login");
    } catch (error) {
      alert("Sign out failed. Please try again.");
    }
  };
  return (
    <button
      onClick={handleSignOut}
      className="rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
