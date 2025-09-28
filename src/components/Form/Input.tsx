import React, { ChangeEventHandler } from "react";

interface InputProps {
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "datetime-local";
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  variant?: "default" | "classic";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  error?: string;
  label?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  value = "",
  onChange,
  placeholder = "",
  className = "",
  disabled = false,
  variant = "default",
  icon,
  iconPosition = "left",
  error,
  label,
  name,
}) => {
  const baseClasses = `w-full rounded-lg border py-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark dark:text-white ${
    error
      ? "border-red-500 focus:border-red-500 dark:border-red-500"
      : "border-gray-300 focus:border-primary dark:border-gray-600"
  }`;

  // Determine padding based on icon position
  const getPaddingClasses = () => {
    if (!icon) return "px-4";

    if (iconPosition === "left") {
      return variant === "classic" ? "pl-10 pr-4" : "px-4";
    } else {
      return "pl-4 pr-10";
    }
  };

  const variantClasses = {
    default: `${baseClasses} ${getPaddingClasses()}`,
    classic: `${baseClasses} ${getPaddingClasses()}`,
  };

  return (
    <div className={className}>
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={variantClasses[variant]}
          name={name}
        />
        {icon && (
          <div
            className={`pointer-events-none absolute bottom-0 top-0 flex items-center text-gray-500 dark:text-gray-400 ${
              iconPosition === "left" ? "left-3" : "right-3"
            }`}
          >
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

export default Input;
