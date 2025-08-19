import { useMemo, useState } from "react";
import RequestCard from "./RequestCard";

const RequestList = ({ requests = [] }) => {
    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("ALL");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return requests.filter((r) => {
            const matchesQuery = q
                ? r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)
                : true;
            const matchesStatus = status === "ALL" ? true : r.status === status;
            return matchesQuery && matchesStatus;
        });
    }, [requests, query, status]);

    if (!requests.length) {
        return (
            <div className="rounded-lg border bg-white p-6 text-center text-slate-600">
                No requests yet. Create your first one!
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by title or description"
                    className="flex-1 min-w-[200px] rounded border px-3 py-2"
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded border px-3 py-2">
                    <option value="ALL">All statuses</option>
                    <option value="PENDING">PENDING</option>
                    <option value="IN_PROGRESS">IN_PROGRESS</option>
                    <option value="COMPLETED">COMPLETED</option>
                </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((r) => (
                    <RequestCard key={r.id} request={r} />
                ))}
            </div>
        </div>
    );
};

export default RequestList;


