"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { defaultValues } from "@/lib/schemas/trade-journal";
import { tradeJournalSchema } from "@/lib/schemas/trade-journal";
import { TradeJournalFormValues } from "@/lib/schemas/trade-journal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { JournalForm } from "./journal-form";
export default function AddJournal() {
  const form = useForm<TradeJournalFormValues>({
    resolver: zodResolver(tradeJournalSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: TradeJournalFormValues) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-3">Add Journal</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0  sm:max-w-3xl [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 sm:p-6 text-left">
          <div className="p-4 border-b">
            <DialogTitle className="py-2 text-2xl font-bold">
              Add Journal
            </DialogTitle>
            <DialogDescription className="">
              Only enter trade into your journal after you have executed them
            </DialogDescription>
          </div>
        </DialogHeader>

        <JournalForm />
      </DialogContent>
    </Dialog>
  );
}
