import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../components/FormComponent";
import { registerFields } from "../constants/formFields";
import { registerSchema } from "../schemas/schemas";
import axiosInstance from "../utils/axiosInstance";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      const response = await axiosInstance.post("/api/v1/auth/register", data);
      const responseData = response.data;
      if (!responseData.success) {
        setError(responseData.error?.message || "Something went wrong");
        return;
      }
      setSuccess(responseData.message || "Registration successful");
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2000);
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
          Tech<span className="text-accent">Fix</span> Register
        </h2>
        <FormComponent
          schema={registerSchema}
          fields={registerFields}
          onSubmit={onSubmit}
          isSubmitting={loading}
          buttonName="Register"
          errorParams={error}
          successParams={success}
        />
      </div>
    </div>
  );
};

export default Register;
