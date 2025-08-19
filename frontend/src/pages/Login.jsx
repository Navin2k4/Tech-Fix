import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../components/FormComponent";
import { loginFields } from "../constants/formFields";
import { useAuthStore } from "../hooks/authStore.js";
import { loginSchema } from "../schemas/schemas";
import axiosInstance from "../utils/axiosInstance.js";
import {jwtDecode} from "jwt-decode";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");
const response = await axiosInstance.post("/api/v1/auth/authenticate", data);

const token = response.data.token;
const decoded = jwtDecode(token);

console.log("Decoded JWT: ", decoded);

setAuth({
  user: {
    id: decoded.id,
    email: decoded.email,
    roles: decoded.roles,
    enabled: decoded.enabled
  },
  token
});

setTimeout(() => {
  navigate("/dashboard", { replace: true });
}, 1500);
    } catch (err) {
      const serverError = err.response?.data?.error;
      if (serverError?.message) {
        setError(serverError.message);
      } else if (err.request) {
        setError("No response from server. Please try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-slate-700">
            Tech<span className="text-accent">Fix</span> Login
        </h2>
        <FormComponent
          schema={loginSchema}
          fields={loginFields}
          onSubmit={onSubmit}
          isSubmitting={loading}
          buttonName="Login"
          errorParams={error}
          successParams={success}
        />
      </div>
    </div>
  );
};

export default Login;
