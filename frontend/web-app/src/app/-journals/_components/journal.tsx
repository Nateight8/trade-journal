import Link from "next/link";
import { ArrowUpRight, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import CurrencyPairFlag from "@/components/ui/currency-pair-flag";

interface JournalCardProps {
  id: string;
  title: string;
  pair: string;
  date: string;
  direction: "Long" | "Short";
  profitLoss: {
    amount: string;
    percentage: string;
  };
  outcome?: "success" | "failure" | "breakeven" | "open";
}

export default function Journal({
  id,
  title,
  pair,
  date,
  direction,
  profitLoss,
  outcome,
}: JournalCardProps) {
  const isProfit = profitLoss.amount.startsWith("+");

  return (
    <Link href={`/journals/${id}`} className="block">
      <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer border-none">
        <CardContent className="p-0 flex items-center gap-2">
          {/* <CurrencyPairFlag currencyPair={pair} /> */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-md truncate">
                    {title.length > 10 ? `${title.slice(0, 10)}...` : title}
                  </h3>
                  <Badge
                    variant={direction === "Long" ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {direction}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium">{pair}</span>
                  <span>•</span>
                  <span>{date}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span
                    className={cn(
                      "font-medium flex items-center",
                      isProfit ? "text-green-600" : "text-red-600"
                    )}
                  >
                    {isProfit ? (
                      <TrendingUp className="mr-1 h-4 w-4" />
                    ) : (
                      <TrendingDown className="mr-1 h-4 w-4" />
                    )}
                    {profitLoss.amount} ({profitLoss.percentage})
                  </span>
                  <div className="flex items-center">
                    <span className="text-sm">
                      {outcome === "success"
                        ? "✅"
                        : outcome === "failure"
                        ? "❌"
                        : outcome === "breakeven"
                        ? "⚖️"
                        : outcome === "open"
                        ? "🔄"
                        : ""}
                    </span>
                    {outcome === "open" && (
                      <span className="ml-1 text-xs text-blue-500 font-medium">
                        OPEN
                      </span>
                    )}
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
