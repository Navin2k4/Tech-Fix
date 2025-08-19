import AdminSidebar from "../components/AdminSidebar";
import { useRequestStore } from "../hooks/requestStore";

// Mock GenAI-style helpers
const summarize = (text) => {
    if (!text) return "No description provided.";
    const trimmed = text.trim();
    return trimmed.length > 140 ? trimmed.slice(0, 137) + "..." : trimmed;
};

const AdminRequestInsights = () => {
    const requests = useRequestStore((s) => s.requests);

    return (
        <div className="flex min-h-screen">
            <AdminSidebar />
            <main className="flex-1 p-6">
                <h1 className="mb-6 text-2xl font-bold">Request Insights (Mock)</h1>
                <div className="space-y-4">
                    {requests.map((r) => (
                        <div key={r.id} className="rounded-lg border bg-white p-4">
                            <div className="mb-2 flex items-center justify-between">
                                <h3 className="text-lg font-semibold">#{r.id} • {r.title}</h3>
                                <span className="text-xs text-slate-500">{r.status}</span>
                            </div>
                            <p className="text-sm text-slate-700"><span className="font-medium">Summary:</span> {summarize(r.description)}</p>
                            <p className="mt-1 text-xs text-slate-600">Suggested expertise: {r.title.toLowerCase().includes("battery") ? "phones/batteries" : r.title.toLowerCase().includes("desktop") ? "desktops/os" : "general diagnostics"}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default AdminRequestInsights;


