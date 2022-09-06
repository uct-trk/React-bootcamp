import { ErrorMessage, useField } from "formik";

export default function Select({ label, options, original = false, ...props }) {
  const [field, meta, helpers] = useField(props);

  const changeHandle = (e) => {
    let selected = options.find((option) => option.key === +e.target.value);
    helpers.setValue(original ? selected : e.target.value);
  };

  return (
    <>
      <label className="block w-full">
        <div className="text-sm text-gray-600">{label}</div>
        <select
          className="w-full h-10 rounded border-b outline-none focus:border-black"
          defaultValue={field.value}
          onChange={changeHandle}
          {...props}
        >
          {options.map((option, key) => (
            <option value={option.key} key={key}>
              {option.value}
            </option>
          ))}
        </select>
        <ErrorMessage
          name={field.name}
          component="small"
          className="text-red-600 mt-2 text-sm"
        />
      </label>

    </>

  );
}
