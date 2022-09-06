import { useField } from "formik";

export default function Textarea({ label, ...props }) {
    const [field, meta, helpers] = useField(props);
    return (
        <label className="block w-full">
            <div className="text-sm text-gray-600">{label}</div>
            <textarea
                className="resize-none w-full py-4 rounded border-b outline-none focus:border-black"
                {...field}
                {...props}
            />
        </label>
    );
}
