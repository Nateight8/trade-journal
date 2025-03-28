import { cn } from "@/lib/utils";

export function Outcome({ outcome }: { outcome: number }) {
  const isPositive = outcome > 0;
  const trendColor = isPositive ? "text-emerald-500" : "text-red-500";

  return (
    <span className={cn("font-medium", trendColor)}>
      {isPositive ? "↗" : "↘"} {outcome}%
    </span>
  );
}
