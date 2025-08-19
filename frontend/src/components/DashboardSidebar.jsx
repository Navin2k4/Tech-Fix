import { NavLink } from "react-router-dom";
import { useAuthStore } from "../hooks/authStore";
import SignOutButton from "./SignOutButton";

const DashboardSidebar = () => {
    const user = useAuthStore((state) => state.user);

    return (
        <aside className="flex h-full w-64 flex-col gap-6 border-r bg-white p-4">
            <div>
                <h2 className="text-xl font-bold">Tech<span className="text-accent">Fix</span></h2>
            </div>

            <div className="rounded-lg bg-card p-4">
                <p className="text-sm text-slate-500">Signed in as</p>
                <p className="truncate font-semibold">{user?.email || "user@example.com"}</p>
                {Array.isArray(user?.roles) && user.roles.length > 0 && (
                    <p className="mt-1 text-xs text-slate-500">Roles: {user.roles.join(", ")}</p>
                )}
            </div>

            <nav className="flex flex-1 flex-col gap-1">
                <NavLink
                    to="/dashboard"
                    end
                    className={({ isActive }) =>
                        `rounded px-3 py-2 text-sm font-medium ${isActive ? "bg-blue-100 text-blue-700" : "hover:bg-slate-100"}`
                    }
                >
                    Your Requests
                </NavLink>
                <NavLink
                    to="/dashboard/requests/new"
                    className={({ isActive }) =>
                        `rounded px-3 py-2 text-sm font-medium ${isActive ? "bg-blue-100 text-blue-700" : "hover:bg-slate-100"}`
                    }
                >
                    New Request
                </NavLink>
                {Array.isArray(user?.roles) && user.roles.includes("admin") && (
                    <NavLink
                        to="/admin"
                        className={({ isActive }) =>
                            `rounded px-3 py-2 text-sm font-medium ${isActive ? "bg-blue-100 text-blue-700" : "hover:bg-slate-100"}`
                        }
                    >
                        Admin
                    </NavLink>
                )}
            </nav>

            <div>
                <SignOutButton />
            </div>
        </aside>
    );
};

export default DashboardSidebar;


