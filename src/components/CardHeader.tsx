"use client";

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  stats?: Array<{
    label: string;
    value: string | number;
  }>;
  gradientFrom?: string;
  gradientTo?: string;
  textColor?: string;
  subtitleColor?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  stats = [],
  gradientFrom = "from-blue-500",
  gradientTo = "to-purple-600",
  textColor = "text-white",
  subtitleColor = "text-blue-100",
}) => {
  return (
    <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} px-6 py-4`}>
      <h2 className={`text-lg font-semibold ${textColor}`}>{title}</h2>
      {subtitle && <p className={`text-sm ${subtitleColor}`}>{subtitle}</p>}
      {stats.length > 0 && (
        <div className={`mt-2 flex flex-wrap gap-4 text-sm ${subtitleColor}`}>
          {stats.map((stat, index) => (
            <span key={index}>
              {stat.label}: {stat.value}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardHeader;
