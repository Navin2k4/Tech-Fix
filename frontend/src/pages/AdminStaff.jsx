import { useMemo, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { useUserStore } from "../hooks/userStore";
import { useRequestStore } from "../hooks/requestStore";

const AdminStaff = () => {
    const users = useUserStore((s) => s.users);
    const promoteToStaff = useUserStore((s) => s.promoteToStaff);
    const demoteFromStaff = useUserStore((s) => s.demoteFromStaff);
    const toggleAvailability = useUserStore((s) => s.toggleAvailability);
    const setLoad = useUserStore((s) => s.setLoad);
    const suggestStaffForRequest = useUserStore((s) => s.suggestStaffForRequest);
    const updateRequest = useRequestStore((s) => s.updateRequest);
    const requests = useRequestStore((s) => s.requests);

    const [selectedRequestId, setSelectedRequestId] = useState("");

    const staff = useMemo(() => users.filter((u) => u.roles.includes("staff")), [users]);
    const nonStaff = useMemo(() => users.filter((u) => !u.roles.includes("staff")), [users]);

    const selectedRequest = useMemo(() => requests.find((r) => String(r.id) === String(selectedRequestId)) || null, [requests, selectedRequestId]);

    const handleAutoAssign = () => {
        if (!selectedRequest) return;
        const candidate = suggestStaffForRequest(selectedRequest);
        if (!candidate) return alert("No available staff to assign.");
        updateRequest(selectedRequest.id, { assignedStaff: candidate.username, status: "IN_PROGRESS" });
    };

    return (
        <div className="flex min-h-screen">
            <AdminSidebar />
            <main className="flex-1 p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Staff Management</h1>
                    <div className="flex items-center gap-2">
                        <select
                            value={selectedRequestId}
                            onChange={(e) => setSelectedRequestId(e.target.value)}
                            className="rounded border px-3 py-2"
                        >
                            <option value="">Select a request to assign</option>
                            {requests.map((r) => (
                                <option key={r.id} value={r.id}>
                                    #{r.id} • {r.title}
                                </option>
                            ))}
                        </select>
                        <button onClick={handleAutoAssign} className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                            Auto-Assign
                        </button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <section className="rounded-lg border bg-white p-4">
                        <h2 className="mb-3 font-semibold">Current Staff</h2>
                        <div className="space-y-3">
                            {staff.map((u) => (
                                <div key={u.id} className="flex items-center justify-between rounded border p-3">
                                    <div>
                                        <p className="font-medium">{u.username} <span className="text-xs text-slate-500">({u.email})</span></p>
                                        <p className="text-xs text-slate-600">Load: {u.currentLoad} • {u.isAvailable ? "Available" : "Unavailable"}</p>
                                        {u.skills?.length ? <p className="text-xs text-slate-500">Skills: {u.skills.join(", ")}</p> : null}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => toggleAvailability(u.id)} className="rounded bg-slate-100 px-3 py-1 text-xs font-medium hover:bg-slate-200">
                                            Toggle Availability
                                        </button>
                                        <input
                                            type="number"
                                            min={0}
                                            className="w-16 rounded border px-2 py-1 text-xs"
                                            value={u.currentLoad}
                                            onChange={(e) => setLoad(u.id, e.target.value)}
                                            aria-label="Current load"
                                        />
                                        <button onClick={() => demoteFromStaff(u.id)} className="rounded bg-red-500 px-3 py-1 text-xs font-medium text-white hover:bg-red-600">
                                            Demote
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="rounded-lg border bg-white p-4">
                        <h2 className="mb-3 font-semibold">Users</h2>
                        <div className="space-y-3">
                            {nonStaff.map((u) => (
                                <div key={u.id} className="flex items-center justify-between rounded border p-3">
                                    <div>
                                        <p className="font-medium">{u.username} <span className="text-xs text-slate-500">({u.email})</span></p>
                                        <p className="text-xs text-slate-600">Roles: {u.roles.join(", ")}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => promoteToStaff(u.id)} className="rounded bg-green-600 px-3 py-1 text-xs font-medium text-white hover:bg-green-700">
                                            Promote to Staff
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default AdminStaff;


