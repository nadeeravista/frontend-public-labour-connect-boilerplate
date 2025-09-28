interface LoadingProps {
  message?: string;
  variant?: "fullscreen" | "spinner" | "inline";
  size?: "sm" | "md" | "lg";
  color?: string;
}

export const Loading = ({
  message,
  variant = "fullscreen",
  size = "md",
  color = "border-primary",
}: LoadingProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const spinner = (
    <div
      className={`animate-spin rounded-full border-b-2 ${color} ${sizeClasses[size]}`}
    ></div>
  );

  if (variant === "fullscreen") {
    return (
      <div className="absolute top-0 z-50 flex h-screen w-screen items-center justify-center bg-white/70">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="text-center">
            <div className="mx-auto">{spinner}</div>
            {message && (
              <p className=" text-gray-600 dark:text-gray-400">{message}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "spinner") {
    return (
      <div className="flex items-center justify-center py-12">{spinner}</div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="flex items-center gap-2">
        {spinner}
        {message && (
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {message}
          </span>
        )}
      </div>
    );
  }

  return spinner;
};
