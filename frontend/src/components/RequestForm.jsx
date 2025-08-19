import { useForm } from "react-hook-form";

const RequestForm = ({ defaultValues, onSubmit, isSubmitting = false, mode = "create" }) => {
    const { register, handleSubmit } = useForm({ defaultValues });
    const isEdit = mode === "edit";

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-1">
                <label htmlFor="title" className="text-sm font-medium text-slate-700">Title</label>
                <input
                    id="title"
                    type="text"
                    {...register("title", { required: true })}
                    className="rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Phone battery draining fast"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="description" className="text-sm font-medium text-slate-700">Description</label>
                <textarea
                    id="description"
                    rows={5}
                    {...register("description", { required: true })}
                    className="rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe the issue in detail"
                />
            </div>

            {isEdit && (
                <div className="flex flex-col gap-1">
                    <label htmlFor="status" className="text-sm font-medium text-slate-700">Status</label>
                    <select
                        id="status"
                        {...register("status", { required: true })}
                        className="rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="PENDING">PENDING</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="COMPLETED">COMPLETED</option>
                    </select>
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
            >
                {isSubmitting ? "Processing..." : isEdit ? "Update Request" : "Create Request"}
            </button>
        </form>
    );
};

export default RequestForm;


