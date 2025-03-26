"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UpdateJournalSchema } from "./update-journal";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export function NoteForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof UpdateJournalSchema>>;
}) {
  return (
    <FormField
      control={form.control}
      name="tradeNote"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Note</FormLabel>
          <FormControl>
            <Textarea
              placeholder="What did you learn from this trade?"
              className="resize-none"
              {...field}
            />
          </FormControl>
          <FormDescription>
            💡 Remember: Honest reflection is the foundation of trading mastery.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
