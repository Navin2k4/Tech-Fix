import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormComponent = ({
  schema,
  fields = [],
  onSubmit,
  isSubmitting = false,
  buttonName = "Submit",
  errorParams = "",
  successParams = "",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {errorParams && (
        <p className="text-center font-medium text-red-600">{errorParams}</p>
      )}
      {successParams && (
        <p className="text-center font-medium text-green-600">
          {successParams} — Redirecting...
        </p>
      )}
      {fields.map(({ name, label, type = "text", autoComplete = "off" }) => (
        <div key={name} className="flex flex-col gap-1">
          <label htmlFor={name} className="text-sm font-medium text-slate-700">
            {label}
          </label>
          <input
            id={name}
            type={type}
            {...register(name)}
            autoComplete={autoComplete}
            className={`rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 ${
              errors[name]
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:ring-blue-500"
            }`}
            aria-invalid={errors[name] ? "true" : "false"}
          />
          {errors[name] && (
            <p className="text-sm text-red-500" role="alert">
              {errors[name]?.message}
            </p>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? "Processing..." : buttonName}
      </button>
    </form>
  );
};

export default FormComponent;
