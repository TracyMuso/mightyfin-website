"use client";

import ErrorMessage from "./error-message";

interface FileUploadProps {
  label: string;
  name: string;
  accept?: string;
  error?: string;
  onChange: (file: File | null) => void;
}

export function FileUpload({
  label,
  name,
  accept,
  error,
  onChange,
}: FileUploadProps) {
  return (
    <div>
      <label className="block mb-1 font-semibold">{label}</label>
      <input
        type="file"
        id={name}
        name={name}
        accept={accept}
        onChange={(e) => onChange(e.target.files?.[0] || null)}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-50 file:text-indigo-700
          hover:file:bg-indigo-100"
      />
      <ErrorMessage message={error} />
    </div>
  );
}
