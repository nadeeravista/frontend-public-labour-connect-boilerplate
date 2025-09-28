import React from "react";

interface TextAreaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  rows?: number;
  className?: string;
  maxLength?: number;
  disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  error,
  required = false,
  rows = 4,
  className = "",
  maxLength,
  disabled = false,
}) => {
  const baseClasses = `w-full rounded-2xl border-2 px-4 py-4 text-gray-900 transition-all duration-200 focus:ring-4 focus:ring-blue-500/20 resize-none ${
    error
      ? "border-red-500 focus:border-red-500"
      : "border-gray-200 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
  } ${disabled ? "cursor-not-allowed opacity-50" : ""}`;

  const textAreaClasses = `${baseClasses} ${className}`;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        maxLength={maxLength}
        disabled={disabled}
        className={textAreaClasses}
      />

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}

      {maxLength && (
        <p className="text-right text-xs text-gray-500 dark:text-gray-500">
          {value.length}/{maxLength} characters
        </p>
      )}
    </div>
  );
};

export default TextArea;
