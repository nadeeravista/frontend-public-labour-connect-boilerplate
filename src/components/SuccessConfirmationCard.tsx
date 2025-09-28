import React from "react";

interface SuccessConfirmationCardProps {
  title: string;
  messages: string[];
  actionButton?: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "danger" | "secondary";
  };
  iconClassName?: string;
  containerClassName?: string;
}

const SuccessConfirmationCard: React.FC<SuccessConfirmationCardProps> = ({
  title,
  messages,
  actionButton,
  containerClassName = "mx-auto max-w-2xl",
}) => {
  return (
    <div className={containerClassName}>
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <div className="mb-4 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500"></div>
        </div>

        <div className="space-y-4 text-center">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
            {title}
          </h3>

          <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
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
      </div>
    </div>
  );
};

export default SuccessConfirmationCard;
