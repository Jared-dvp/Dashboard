interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: string;
  changeColor?: "positive" | "negative";
}

function StatsCard({
  title,
  value,
  icon,
  change,
  changeColor,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 w-full max-w-sm">
      {icon && (
        <div className="p-2 rounded-full bg-gray-100 text-gray-600">{icon}</div>
      )}

      <div className="flex flex-col">
        <span className="text-sm text-gray-500">{title}</span>
        <span className="text-2xl font-bold">{value}</span>

        {change && (
          <span
            className={`text-xs mt-1 ${
              changeColor === "positive" ? "text-green-500" : "text-red-500"
            }`}
          >
            {change}
          </span>
        )}
      </div>
    </div>
  );
}

export default StatsCard;
