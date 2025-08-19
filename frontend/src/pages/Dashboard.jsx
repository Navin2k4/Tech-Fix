import React from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import RequestList from "../components/RequestList";
import { useRequestStore } from "../hooks/requestStore";

const Dashboard = () => {
  const requests = useRequestStore((state) => state.requests);

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Your Requests</h1>
            <p className="text-sm text-slate-600">Track and manage your service requests.</p>
          </div>
          <Link
            to="/dashboard/requests/new"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            New Request
          </Link>
        </div>
        <RequestList requests={requests} />
      </main>
    </div>
  );
};

export default Dashboard;
