import { Link } from "react-router-dom";

const StatusBadge = ({ status }) => {
    const styles = {
        PENDING: "bg-yellow-100 text-yellow-800",
        IN_PROGRESS: "bg-blue-100 text-blue-800",
        COMPLETED: "bg-green-100 text-green-800",
    };
    return (
        <span className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${styles[status] || "bg-slate-100 text-slate-700"}`}>
            {status}
        </span>
    );
};

const RequestCard = ({ request }) => {
    const { id, title, description, status, customerUsername, assignedStaff, createdAt, updatedAt } = request;
    return (
        <div className="flex flex-col gap-2 rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <StatusBadge status={status} />
            </div>
            <p className="line-clamp-3 text-sm text-slate-600">{description}</p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-500 md:grid-cols-4">
                <div>
                    <span className="font-medium text-slate-700">Customer:</span> {customerUsername || "-"}
                </div>
                <div>
                    <span className="font-medium text-slate-700">Assigned:</span> {assignedStaff || "Unassigned"}
                </div>
                <div>
                    <span className="font-medium text-slate-700">Created:</span> {new Date(createdAt).toLocaleString()}
                </div>
                <div>
                    <span className="font-medium text-slate-700">Updated:</span> {new Date(updatedAt).toLocaleString()}
                </div>
            </div>
            <div className="mt-3">
                <Link to={`/dashboard/requests/${id}/edit`} className="text-sm font-medium text-blue-600 hover:underline">
                    Edit
                </Link>
            </div>
        </div>
    );
};

export default RequestCard;


