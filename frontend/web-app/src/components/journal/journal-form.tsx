"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  tradeJournalSchema,
  type TradeJournalFormValues,
  defaultValues,
} from "@/lib/schemas/trade-journal";
import { toast } from "sonner";
import { MutationFunction, OperationVariables } from "@apollo/client";

interface CreateTradeResponse {
  createTrade: {
    message: string;
    status: string;
  };
}

export function JournalForm({
  createTrade,
  loading,
}: {
  createTrade: MutationFunction<CreateTradeResponse, OperationVariables>;
  loading: boolean;
  data?: CreateTradeResponse | null;
}) {
  const form = useForm<TradeJournalFormValues>({
    resolver: zodResolver(tradeJournalSchema),
    defaultValues,
  });

  async function onSubmit(data: TradeJournalFormValues) {
    try {
      await createTrade({
        variables: {
          input: {
            ...data,
            volume: Number(data.volume),
          },
        },
      });
      toast.success("Trade journal entry added successfully");
      // Close the dialog by clicking the close button
      const closeButton = document.querySelector(
        '[aria-label="Close"]'
      ) as HTMLButtonElement;
      closeButton?.click();
    } catch {
      toast.error("Failed to add trade journal entry. Please try again.");
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
        {/* Basic Trade Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Basic Trade Information</h3>
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="instrument"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instrument</FormLabel>
                  <FormControl>
                    <Input placeholder="EUR/USD" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="volume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Volume</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.1"
                      placeholder="1.0"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Position</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Long">Long</SelectItem>
                      <SelectItem value="Short">Short</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Trade Details */}
        {/* <div className="space-y-4">
          <h3 className="text-lg font-medium">Trade Details</h3>
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="timeframe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timeframe</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="M1">M1</SelectItem>
                      <SelectItem value="M5">M5</SelectItem>
                      <SelectItem value="M15">M15</SelectItem>
                      <SelectItem value="M30">M30</SelectItem>
                      <SelectItem value="H1">H1</SelectItem>
                      <SelectItem value="H4">H4</SelectItem>
                      <SelectItem value="D1">D1</SelectItem>
                      <SelectItem value="W1">W1</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="strategy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Strategy</FormLabel>
                  <FormControl>
                    <Input placeholder="Trend Following" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="setup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Setup</FormLabel>
                  <FormControl>
                    <Input placeholder="Breakout" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div> */}

        {/* Market Conditions */}
        {/* <div className="space-y-4">
          <h3 className="text-lg font-medium">Market Conditions</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="marketCondition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Market Condition</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select market condition" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Trending">Trending</SelectItem>
                      <SelectItem value="Ranging">Ranging</SelectItem>
                      <SelectItem value="Volatile">Volatile</SelectItem>
                      <SelectItem value="News">News</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="marketSession"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Market Session</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select market session" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="London">London</SelectItem>
                      <SelectItem value="New York">New York</SelectItem>
                      <SelectItem value="Tokyo">Tokyo</SelectItem>
                      <SelectItem value="Sydney">Sydney</SelectItem>
                      <SelectItem value="Frankfurt">Frankfurt</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div> */}

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => {}}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Trade Journal"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
