import React from "react";

interface WarningCardProps {
  title?: string;
  message: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: "warning" | "error" | "info" | "success";
  action?: {
    label: string;
    onClick: () => void;
  };
}

const WarningCard: React.FC<WarningCardProps> = ({
  title,
  message,
  icon,
  className = "",
  variant = "warning",
  action,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "error":
        return {
          container:
            "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20",
          text: "text-red-600 dark:text-red-400",
          title: "text-red-800 dark:text-red-200",
        };
      case "info":
        return {
          container:
            "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
          text: "text-blue-600 dark:text-blue-400",
          title: "text-blue-800 dark:text-blue-200",
        };
      case "success":
        return {
          container:
            "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20",
          text: "text-green-600 dark:text-green-400",
          title: "text-green-800 dark:text-green-200",
        };
      case "warning":
      default:
        return {
          container:
            "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20",
          text: "text-yellow-600 dark:text-yellow-400",
          title: "text-yellow-800 dark:text-yellow-200",
        };
    }
  };

  const getDefaultIcon = () => {
    switch (variant) {
      case "error":
        return (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        );
      case "info":
        return (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "success":
        return (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "warning":
      default:
        return (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        );
    }
  };

  const styles = getVariantStyles();
  const displayIcon = icon || getDefaultIcon();

  return (
    <div className={`rounded-2xl border p-6 ${styles.container} ${className}`}>
      <div className="flex items-start space-x-3">
        <div className={`flex-shrink-0 ${styles.text}`}>{displayIcon}</div>
        <div className="flex-1">
          {title && (
            <h3 className={`text-sm font-medium ${styles.title} mb-1`}>
              {title}
            </h3>
          )}
          <p className={`text-sm ${styles.text}`}>{message}</p>
          {action && (
            <div className="mt-3">
              <button
                onClick={action.onClick}
                className={`text-sm font-medium underline hover:no-underline ${styles.text}`}
              >
                {action.label}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WarningCard;
