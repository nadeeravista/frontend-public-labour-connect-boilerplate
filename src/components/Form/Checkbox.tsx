import React from "react";

interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
  disabled?: boolean;
  description?: string;
  layout?: "vertical" | "horizontal";
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  checked,
  onChange,
  label,
  className = "",
  disabled = false,
  description,
  layout = "vertical",
}) => {
  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={`${isHorizontal ? "flex items-center" : "space-y-1"} ${className}`}
    >
      <div
        className={`flex items-center ${isHorizontal ? "space-x-2" : "space-x-3"}`}
      >
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked || false}
          onChange={onChange}
          disabled={disabled}
          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700"
        />
        <label
          htmlFor={id}
          className={`text-sm font-medium ${
            disabled
              ? "cursor-not-allowed text-gray-400 dark:text-gray-500"
              : "cursor-pointer text-gray-700 dark:text-gray-300"
          }`}
        >
          {label}
        </label>
      </div>
      {description && !isHorizontal && (
        <p className="ml-7 text-xs text-gray-500 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default Checkbox;
