import { z } from "zod";

export const tradeJournalSchema = z.object({
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

  // Rest of the schema remains the same
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
