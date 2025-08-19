import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import RequestForm from "../components/RequestForm";
import { useRequestStore } from "../hooks/requestStore";

const RequestEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);
    const getRequestById = useRequestStore((state) => state.getRequestById);
    const updateRequest = useRequestStore((state) => state.updateRequest);

    const request = getRequestById(id);

    const defaults = useMemo(() => {
        if (!request) return null;
        return {
            title: request.title,
            description: request.description,
            status: request.status,
        };
    }, [request]);

    const handleSubmit = async (data) => {
        setSubmitting(true);
        try {
            updateRequest(id, {
                title: data.title,
                description: data.description,
                status: data.status,
            });
            navigate("/dashboard");
        } finally {
            setSubmitting(false);
        }
    };

    if (!request) {
        return (
            <div className="flex min-h-screen">
                <DashboardSidebar />
                <main className="flex-1 p-6">
                    <div className="rounded-lg border bg-white p-6 text-slate-600">Request not found.</div>
                </main>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen">
            <DashboardSidebar />
            <main className="flex-1 p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Edit Request #{id}</h1>
                    <p className="text-sm text-slate-600">Update the fields and save.</p>
                </div>
                <div className="mx-auto max-w-2xl rounded-lg border bg-white p-6">
                    <RequestForm defaultValues={defaults} onSubmit={handleSubmit} isSubmitting={submitting} mode="edit" />
                </div>
            </main>
        </div>
    );
};

export default RequestEdit;


