import { auth } from "@/auth";
import AddJournal from "@/components/journal-dialog";
import TradeLogTable from "@/components/table/trade-logs-table";

export default async function Page() {
  const session = await auth();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 lg:gap-6 py-4 lg:py-6">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">
              {session?.user?.name?.split(" ").join(", ")}
            </h1>
            <p className="text-sm text-muted-foreground">
              Here&rsquo;s an overview of your trades so far...
            </p>
          </div>
          <AddJournal />
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 md:min-h-min py-4">
        <TradeLogTable />
      </div>
    </>
  );
}
