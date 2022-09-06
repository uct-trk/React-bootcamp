import { ErrorMessage, useField } from "formik";
import { FiCheck } from "react-icons/fi";

export default function File({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  async function fileOpen() {
    try {
      const [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      helpers.setValue(file);
    } catch (error) {
      helpers.setValue("");
    }
  }

  return (
    <>
      <label className="block w-full">
        <div className="text-sm text-gray-600">{label}</div>
        <input
          className="w-full h-10 rounded border-b outline-none focus:border-black"
          {...field}
          {...props}
        />
        <ErrorMessage
          name={field.name}
          component="small"
          className="text-red-600 mt-2 text-sm"
        />
      </label>
      <div>
        <div>{label}</div>

        <button
          onClick={fileOpen}
          className="px-5 rounded bg-blue-50 text-blue-500 h-10"
          type="button"
        >
          {field.value && (
            <>
              Dosya Seçild <FiCheck size={15} />
            </>
          )}
          {!field.value && "Dosya Seç"}
        </button>

        {field.value && (
          <button
            onClick={() => helpers.setValue("")}
            className="flex w-full underline text-gray-600 mt-2"
          >
            Dosyayı Kaldır
          </button>
        )}
        <ErrorMessage
          name={field.name}
          component="small"
          className="text-red-600 mt-2 text-sm"
        />
      </div>
    </>
  );
}
