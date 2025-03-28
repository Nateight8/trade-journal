import { Outcome } from "@/components/ui/outcome";
import CurrencyPairFlag from "@/components/ui/currency-pair-flag";

export default function Page() {
  return (
    <div className="h-[80vh] w-full relative flex items-center justify-center">
      {/* <Outcome outcome={-10} /> */}
      <CurrencyPairFlag size="md" currencyPair="USD/JPY" />
    </div>
  );
}

// TODO:
// - Add a calendar view
// - Add a list view
// - Add a heatmap view
// - Add a timeline view
// - Add a list view
// - Use the Outcome component to display the outcome of trade in trade log table and calendar view
