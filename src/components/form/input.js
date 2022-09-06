import classNames from "classnames";
import { ErrorMessage, useField } from "formik";

export default function Input({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <label className="block w-full">
      <div className="text-sm text-gray-600">{label}</div>
      <input
        className={classNames({
          "w-full h-10 rounded border-b outline-none": true,
          "focus:border-black": !meta.error || !meta.touched,
          "border-red-600": meta.error && meta.touched,
        })}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="small"
        className="text-red-600 mt-2 text-sm"
      />
    </label>
  );
}
