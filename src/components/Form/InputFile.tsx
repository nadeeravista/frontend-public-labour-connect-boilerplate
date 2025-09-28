import React from "react";
import { formatFileSize } from "@/utils/file-upload.utils";
import { SchemaTypes } from "@/types/generated.types";
type AttachmentDto = SchemaTypes["AttachmentDto"];

interface InputFileProps {
  label?: string;
  multiple?: boolean;
  accept?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  uploadedFiles: AttachmentDto[];
  onRemoveFile: (index: number) => void;
  className?: string;
  maxFileSize?: number; // in MB
  maxFiles?: number;
}

const InputFile: React.FC<InputFileProps> = ({
  label = "Attach Files (Optional)",
  multiple = true,
  accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.txt",
  onChange,
  uploadedFiles,
  onRemoveFile,
  className = "",
  maxFileSize = 10,
  maxFiles = 5,
}) => {
  const getFileIcon = (file: AttachmentDto) => {
    const fileType = file.type;
    if (fileType.startsWith("image/")) {
      return (
        <svg
          className="h-4 w-4 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    } else if (fileType.includes("pdf")) {
      return (
        <svg
          className="h-4 w-4 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          className="h-4 w-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      <div className="rounded-2xl border-2 border-dashed border-gray-300 p-6 text-center transition-colors hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500">
        <input
          type="file"
          multiple={multiple}
          onChange={onChange}
          className="hidden"
          id="file-upload"
          accept={accept}
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
              Click to upload
            </span>{" "}
            or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {accept} (Max {maxFileSize}MB each, {maxFiles} files max)
          </p>
        </label>
      </div>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Uploaded Files ({uploadedFiles.length}):
          </p>
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700"
            >
              <div className="flex items-center space-x-2">
                {getFileIcon(file)}
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {file.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  ({formatFileSize(file.size)} MB)
                </span>
              </div>
              <button
                type="button"
                onClick={() => onRemoveFile(index)}
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputFile;
