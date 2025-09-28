import React from "react";

interface ConfirmationDialogDetailedProps {
  title: string;
  messages: string[];
  actionButton?: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "danger" | "secondary";
  };
  titleColor?: string;
  messageColor?: string;
}

const ConfirmationDialogDetailed: React.FC<ConfirmationDialogDetailedProps> = ({
  title,
  messages,
  actionButton,
  titleColor = "text-green-800 dark:text-green-200",
  messageColor = "text-green-700 dark:text-green-300",
}) => {
  return (
    <div className="space-y-4 text-center">
      <h3 className={`text-lg font-semibold ${titleColor}`}>{title}</h3>

      <div className={`space-y-2 text-sm ${messageColor}`}>
        {messages.map((message, index) => (
          <p key={index}>
            {index === 0 ? (
              <>
                • <strong>{message}</strong>
              </>
            ) : (
              <>• {message}</>
            )}
          </p>
        ))}
      </div>

      {actionButton && (
        <div className="pt-4">
          <button
            type="button"
            onClick={actionButton.onClick}
            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
              actionButton.variant === "danger"
                ? "bg-red-500 text-white hover:bg-red-600"
                : actionButton.variant === "secondary"
                  ? "bg-gray-500 text-white hover:bg-gray-600"
                  : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {actionButton.label}
          </button>
        </div>
      )}
    </div>
  );
};

export default ConfirmationDialogDetailed;
