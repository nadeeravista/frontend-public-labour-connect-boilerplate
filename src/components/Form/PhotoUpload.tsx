import React, { useState } from "react";
import {
  validateFileSize,
  validateFileType,
  formatFileSize,
} from "@/utils/file-upload.utils";

interface PhotoUploadProps {
  label?: string;
  onChange: (file: File | null) => void;
  uploadedFile: File | null;
  onRemoveFile: () => void;
  className?: string;
  maxFileSize?: number; // in MB
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({
  label = "Upload Photo",
  onChange,
  uploadedFile,
  onRemoveFile,
  className = "",
  maxFileSize = 5,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      // Validate file size
      if (!validateFileSize(file, maxFileSize)) {
        alert(`File size must be less than ${maxFileSize}MB`);
        return;
      }

      // Validate file type
      if (!validateFileType(file, ["image/*"])) {
        alert("Please select an image file");
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }

    onChange(file);
  };

  const handleRemove = () => {
    setPreview(null);
    onRemoveFile();
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      {/* Upload Area */}
      <div className="rounded-2xl border-2 border-dashed border-gray-300 p-6 text-center transition-colors hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="photo-upload"
          accept="image/*"
        />
        <label htmlFor="photo-upload" className="cursor-pointer">
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
              Click to upload photo
            </span>{" "}
            or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            PNG, JPG, GIF up to {maxFileSize}MB
          </p>
        </label>
      </div>

      {/* Preview */}
      {(preview || uploadedFile) && (
        <div className="mt-4">
          <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Photo Preview:
          </p>
          <div className="relative inline-block">
            <img
              src={
                preview ||
                (uploadedFile ? URL.createObjectURL(uploadedFile) : "")
              }
              alt="Preview"
              className="h-32 w-32 rounded-lg object-cover shadow-md"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
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
          {uploadedFile && (
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {uploadedFile.name} ({formatFileSize(uploadedFile.size)} MB)
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
