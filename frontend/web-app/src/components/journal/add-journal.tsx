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

import { JournalForm } from "./journal-form";
import { useMutation, OperationVariables } from "@apollo/client";
import tradeOperations from "@/graphql/operations/trade-operations";
import { useState } from "react";

interface CreateTradeResponse {
  createTrade: {
    message: string;
    status: string;
  };
}

interface TradesQueryResult {
  trades: Array<{
    id: string;
    instrument: string;
    position: string;
    volume: number;
    status: string;
    outcome: string;
    __typename: string;
  }>;
}

export default function AddJournal() {
  const [open, setOpen] = useState(false);

  const [createTrade, { loading }] = useMutation<
    CreateTradeResponse,
    OperationVariables
  >(tradeOperations.Mutations.createTrade, {
    update(cache, { data }) {
      if (!data?.createTrade) return;

      // Read the existing trades query
      const existingTrades = cache.readQuery<TradesQueryResult>({
        query: tradeOperations.Queries.getAllTrades,
      });

      // Write back to the cache with the new trade
      cache.writeQuery({
        query: tradeOperations.Queries.getAllTrades,
        data: {
          trades: [...(existingTrades?.trades || []), data.createTrade],
        },
      });

      // Close the dialog on success
      setOpen(false);
    },
  });

  const handleOpenChange = () => {
    setOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className="px-3">
          Add Journal
        </Button>
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

        <JournalForm createTrade={createTrade} loading={loading} />
      </DialogContent>
    </Dialog>
  );
}
