import AdminSidebar from "../components/AdminSidebar";
import { useRequestStore } from "../hooks/requestStore";
import { useUserStore } from "../hooks/userStore";

const AdminOverview = () => {
    const requests = useRequestStore((s) => s.requests);
    // Select raw users and derive staff here to avoid a new array each render
    const users = useUserStore((s) => s.users);
    const staff = users.filter((u) => u.roles.includes("staff"));

    const counts = {
        total: requests.length,
        pending: requests.filter((r) => r.status === "PENDING").length,
        inProgress: requests.filter((r) => r.status === "IN_PROGRESS").length,
        completed: requests.filter((r) => r.status === "COMPLETED").length,
        staff: staff.length,
    };

    return (
        <div className="flex min-h-screen">
            <AdminSidebar />
            <main className="flex-1 p-6">
                <h1 className="mb-6 text-2xl font-bold">Admin Overview</h1>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border bg-white p-6"><p className="text-sm text-slate-500">Total Requests</p><p className="text-3xl font-bold">{counts.total}</p></div>
                    <div className="rounded-lg border bg-white p-6"><p className="text-sm text-slate-500">Pending</p><p className="text-3xl font-bold">{counts.pending}</p></div>
                    <div className="rounded-lg border bg-white p-6"><p className="text-sm text-slate-500">In Progress</p><p className="text-3xl font-bold">{counts.inProgress}</p></div>
                    <div className="rounded-lg border bg-white p-6"><p className="text-sm text-slate-500">Completed</p><p className="text-3xl font-bold">{counts.completed}</p></div>
                    <div className="rounded-lg border bg-white p-6"><p className="text-sm text-slate-500">Staff</p><p className="text-3xl font-bold">{counts.staff}</p></div>
                </div>
            </main>
        </div>
    );
};

export default AdminOverview;


