import { z } from "zod";

// export const  = z.object({

//   // Rest of the schema remains the same
//   volume: z.number().min(0.1, "Volume must be at least 0.1"),

//   position: z.enum(["Long", "Short"], {
//     required_error: "Position is required",
//   }),
// });

//

// // Default values for the form
// export const defaultValues: TradeJournalFormValues = {
//   // Basic Trade Information
//   instrument: "",
//   volume: 1,
//   position: "Long",
// };

const tradeJournalSchema = z.object({
  // Trade Setup
  instrument: z
    .string()
    // Trim whitespace
    .trim()
    // Convert to uppercase to standardize
    .transform((val) => val.toUpperCase())
    // Validate total length is exactly 6 characters
    .refine(
      (val) => {
        // Remove any potential separator
        const cleanedVal = val.replace("/", "");

        // Check if exactly 6 alphabetic characters
        return cleanedVal.length === 6 && /^[A-Z]{6}$/.test(cleanedVal);
      },
      {
        message: "Invalid instrument format. (e.g., EUR/USD)",
      }
    )
    // Transform to standard format with a slash
    .transform((val) => {
      // Remove any existing separator
      const cleanedVal = val.replace("/", "");

      // Insert slash in the middle
      return `${cleanedVal.slice(0, 3)}/${cleanedVal.slice(3)}`;
    }),

  entryPrice: z.number().min(0, {
    message: "Entry price must be a positive number.",
  }),

  strategy: z.string().min(2, {
    message: "Strategy must be at least 2 characters.",
  }),
  setupRating: z.number().int().min(1).max(5, {
    message: "Rating must be an integer between 1 and 5.",
  }),

  // Risk Management
  takeProfit: z.number().min(0, {
    message: "Take profit must be zero or a positive number.",
  }),
  stopLoss: z.number().min(0, {
    message: "Stop loss must be zero or a positive number.",
  }),
  // Notes (optional)
  notes: z.string().optional(),
});

export type TradeJournalFormValues = z.infer<typeof tradeJournalSchema>;
export default tradeJournalSchema;
