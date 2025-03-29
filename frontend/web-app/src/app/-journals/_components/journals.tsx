import Journal from "./journal";

const sampleJournals = [
  {
    id: "1",
    title: "Breakout Trade",
    pair: "EUR/USD",
    date: "Mar 28, 2025 09:45 EST",
    direction: "Long",
    profitLoss: {
      amount: "+€187",
      percentage: "+1.2%",
    },
    outcome: "success",
  },
  {
    id: "2",
    title: "Reversal Pattern",
    pair: "GBP/JPY",
    date: "Mar 27, 2025 14:30 EST",
    direction: "Short",
    profitLoss: {
      amount: "-£92",
      percentage: "-0.8%",
    },
    outcome: "failure",
  },
  {
    id: "3",
    title: "Support Test",
    pair: "USD/CAD",
    date: "Mar 26, 2025 11:15 EST",
    direction: "Long",
    profitLoss: {
      amount: "+$145",
      percentage: "+1.5%",
    },
    outcome: "success",
  },
  {
    id: "4",
    title: "Range Trade",
    pair: "AUD/USD",
    date: "Mar 29, 2025 08:20 EST",
    direction: "Short",
    profitLoss: {
      amount: "-$0",
      percentage: "0.0%",
    },
    outcome: "open",
  },
];

export default function Journals() {
  return (
    <>
      <div className="w-full max-w-md border-r h-[calc(100vh-64px)]">
        <div className="p-4">
          <h1 className="text-lg font-bold">Journals</h1>
        </div>

        <div className="space-y-4  divide-y divide-border ">
          {sampleJournals.map((journal) => (
            <Journal
              key={journal.id}
              id={journal.id}
              title={journal.title}
              pair={journal.pair}
              date={journal.date}
              direction={journal.direction as "Long" | "Short"}
              profitLoss={journal.profitLoss}
              outcome={
                journal.outcome as "success" | "failure" | "breakeven" | "open"
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}
