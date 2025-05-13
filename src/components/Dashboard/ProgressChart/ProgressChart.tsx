interface ProgressChartProps {
  title: string;
  progress: number;
  target?: number;
  amount: number;
  color?: string;
}

function ProgressChart({
  title,
  progress,
  target,
  amount,
  color,
}: ProgressChartProps) {
  const progressColor = color || "#4CAF50";
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${progressColor} transition-all duration-500`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex justify-between mt-2 text-sm text-gray-700">
        <span>
          {amount.toLocaleString("es-ES", {
            style: "currency",
            currency: "USD",
          })}
        </span>

        {target && (
          <span>
            de{" "}
            {target.toLocaleString("es-ES", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        )}

        <span>{progress}%</span>
      </div>
    </div>
  );
}

export default ProgressChart;
