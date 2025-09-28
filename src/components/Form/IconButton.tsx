import React from "react";

interface IconButtonProps {
  onClick: () => void;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "close" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  title?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  children,
  className = "",
  variant = "default",
  size = "md",
  disabled = false,
  title,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variantClasses = {
    default:
      "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500",
    close:
      "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500",
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary:
      "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 focus:ring-gray-500",
  };

  const sizeClasses = {
    sm: "p-1",
    md: "p-2",
    lg: "p-3",
  };

  const iconSizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      title={title}
      type="button"
    >
      <div className={iconSizeClasses[size]}>{children || icon}</div>
    </button>
  );
};

export default IconButton;
