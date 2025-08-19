import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import RequestForm from "../components/RequestForm";
import { useAuthStore } from "../hooks/authStore";
import { useRequestStore } from "../hooks/requestStore";

const RequestCreate = () => {
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);
    const createRequest = useRequestStore((state) => state.createRequest);

    const handleSubmit = async (data) => {
        setSubmitting(true);
        try {
            const created = createRequest({
                title: data.title,
                description: data.description,
                customerUsername: user?.email || "guest",
            });
            navigate(`/dashboard/requests/${created.id}/edit`);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex min-h-screen">
            <DashboardSidebar />
            <main className="flex-1 p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Create New Request</h1>
                    <p className="text-sm text-slate-600">Fill in the details below.</p>
                </div>
                <div className="mx-auto max-w-2xl rounded-lg border bg-white p-6">
                    <RequestForm onSubmit={handleSubmit} isSubmitting={submitting} />
                </div>
            </main>
        </div>
    );
};

export default RequestCreate;


