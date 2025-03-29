import JournalHeader from "./_components/journal-header";

export default function JournalPage() {
  return (
    <div className="flex flex-col size-full  gap-4 p-4">
      <JournalHeader
        title="Type two algo market structure trade"
        pair="EUR/USD"
        date="2024-03-20"
        direction="Long"
        profitLoss={{
          amount: "+100",
          percentage: "+1.2%",
        }}
        outcome="success"
      />
    </div>
  );
}
