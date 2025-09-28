import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  label?: string;
  type?: "button" | "submit" | "reset";
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "outline"
    | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  children,
  label,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  className = "",
  icon,
  iconPosition = "left",
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return "border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600";
      case "success":
        return "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:from-green-600 hover:to-emerald-700 hover:shadow-xl";
      case "danger":
        return "bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg hover:from-red-600 hover:to-pink-700 hover:shadow-xl";
      case "outline":
        return "border-2 border-blue-500 bg-transparent text-blue-500 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20";
      case "ghost":
        return "bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800";
      case "primary":
      default:
        return "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:from-blue-600 hover:to-purple-700 hover:shadow-xl";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm";
      case "lg":
        return "px-8 py-4 text-lg";
      case "md":
      default:
        return "px-6 py-3 text-base";
    }
  };

  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20";
  const disabledStyles = "disabled:cursor-not-allowed disabled:opacity-50";
  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  const buttonClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${disabledStyles} ${className}`;

  const renderIcon = () => {
    if (loading) {
      return (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-current"></div>
      );
    }
    if (icon) {
      return (
        <span className={iconPosition === "left" ? "mr-2" : "ml-2"}>
          {icon}
        </span>
      );
    }
    return null;
  };

  const renderContent = () => {
    const content = children || label;

    if (iconPosition === "right") {
      return (
        <>
          {content}
          {renderIcon()}
        </>
      );
    }
    return (
      <>
        {renderIcon()}
        {content}
      </>
    );
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={buttonClasses}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
