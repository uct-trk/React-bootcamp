import { useField } from "formik";
import { FiCheck } from 'react-icons/fi'
import classNames from "classnames";

export default function Checkbox({ label, ...props }) {
    const [field, meta, helpers] = useField(props);
    return (
        <label className="flex gap-x-2 text-sm cursor-pointer items-center">
            <button onClick={() => {
                helpers.setValue(!field.value)
            }} className={classNames({
                "w-5 h-5 rounded border text-transparent flex items-center justify-center": true,
                "border-gray-300 text-transparent": !field.value,
                "border-blue-600 text-blue-600": field.value
            })}>
                <FiCheck size={16} />
            </button>
            {label}
        </label>
    );
}
