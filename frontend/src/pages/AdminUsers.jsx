import AdminSidebar from "../components/AdminSidebar";
import { useUserStore } from "../hooks/userStore";

const AdminUsers = () => {
    const users = useUserStore((s) => s.users);
    return (
        <div className="flex min-h-screen">
            <AdminSidebar />
            <main className="flex-1 p-6">
                <h1 className="mb-6 text-2xl font-bold">User Management</h1>
                <div className="overflow-x-auto rounded-lg border bg-white">
                    <table className="min-w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-600">
                            <tr>
                                <th className="px-4 py-2">Username</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Roles</th>
                                <th className="px-4 py-2">Availability</th>
                                <th className="px-4 py-2">Load</th>
                                <th className="px-4 py-2">Skills</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u) => (
                                <tr key={u.id} className="border-t">
                                    <td className="px-4 py-2 font-medium">{u.username}</td>
                                    <td className="px-4 py-2">{u.email}</td>
                                    <td className="px-4 py-2">{u.roles.join(", ")}</td>
                                    <td className="px-4 py-2">{u.roles.includes("staff") ? (u.isAvailable ? "Available" : "Unavailable") : "-"}</td>
                                    <td className="px-4 py-2">{u.roles.includes("staff") ? u.currentLoad : "-"}</td>
                                    <td className="px-4 py-2">{u.skills?.length ? u.skills.join(", ") : "-"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default AdminUsers;


