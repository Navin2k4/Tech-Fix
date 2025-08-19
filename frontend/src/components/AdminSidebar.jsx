import { NavLink } from "react-router-dom";
import SignOutButton from "./SignOutButton";

const AdminSidebar = () => {
    return (
        <aside className="flex h-full w-64 flex-col gap-6 border-r bg-white p-4">
            <div>
                <h2 className="text-xl font-bold">Admin</h2>
                <p className="text-sm text-slate-500">Tech<span className="text-accent">Fix</span></p>
            </div>
            <nav className="flex flex-1 flex-col gap-1">
                <NavLink
                    to="/admin"
                    end
                    className={({ isActive }) =>
                        `rounded px-3 py-2 text-sm font-medium ${isActive ? "bg-blue-100 text-blue-700" : "hover:bg-slate-100"}`
                    }
                >
                    Overview
                </NavLink>
                <NavLink
                    to="/admin/staff"
                    className={({ isActive }) =>
                        `rounded px-3 py-2 text-sm font-medium ${isActive ? "bg-blue-100 text-blue-700" : "hover:bg-slate-100"}`
                    }
                >
                    Staff Management
                </NavLink>
                <NavLink
                    to="/admin/users"
                    className={({ isActive }) =>
                        `rounded px-3 py-2 text-sm font-medium ${isActive ? "bg-blue-100 text-blue-700" : "hover:bg-slate-100"}`
                    }
                >
                    User Management
                </NavLink>
                <NavLink
                    to="/admin/insights"
                    className={({ isActive }) =>
                        `rounded px-3 py-2 text-sm font-medium ${isActive ? "bg-blue-100 text-blue-700" : "hover:bg-slate-100"}`
                    }
                >
                    Insights (Mock)
                </NavLink>
            </nav>
            <div>
                <SignOutButton />
            </div>
        </aside>
    );
};

export default AdminSidebar;


