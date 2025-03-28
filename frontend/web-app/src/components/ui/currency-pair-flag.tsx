import ReactCountryFlag from "react-country-flag";
import { cn } from "@/lib/utils";

interface CurrencyPairFlagProps {
  currencyPair: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

export default function CurrencyPairFlag({
  currencyPair,
  size = "md",
  className,
}: CurrencyPairFlagProps) {
  console.log("CURRENCY PAIR FROM FLAG", currencyPair);

  if (!currencyPair) {
    return null;
  }

  const [baseCurrency, quoteCurrency] = currencyPair.split("/");

  const bs = baseCurrency.slice(0, 2);
  const qs = quoteCurrency.slice(0, 2);

  //   const baseCurrencyPair = baseCurrency.slice(0, 2);
  //   const quoteCurrencyPair = quoteCurrency.slice(0, 2);

  //   console.log("BASE CURRENCY PAIR", baseCurrencyPair);
  //   console.log("QUOTE CURRENCY PAIR", quoteCurrencyPair);

  return (
    <div className={cn("flex -space-x-3", className)}>
      <div
        className={cn(
          "border bg-muted rounded-full overflow-hidden",
          sizeClasses[size]
        )}
      >
        <ReactCountryFlag
          countryCode={bs}
          svg
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className={cn(
          "border bg-muted rounded-full overflow-hidden",
          sizeClasses[size]
        )}
      >
        <ReactCountryFlag
          countryCode={qs}
          svg
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
