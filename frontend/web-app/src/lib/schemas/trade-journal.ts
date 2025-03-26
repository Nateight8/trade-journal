import { z } from "zod";

export const tradeJournalSchema = z.object({
  // Basic Trade Information
  instrument: z.string().min(1, "Instrument is required"),
  volume: z.number().min(0.1, "Volume must be at least 0.1"),
  position: z.enum(["Long", "Short"], {
    required_error: "Position is required",
  }),
});

export type TradeJournalFormValues = z.infer<typeof tradeJournalSchema>;

// Default values for the form
export const defaultValues: TradeJournalFormValues = {
  // Basic Trade Information
  instrument: "",
  volume: 1,
  position: "Long",
};
