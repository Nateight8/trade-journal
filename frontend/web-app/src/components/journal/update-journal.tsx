"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import SelectOutcome from "./select-outcome";
import { NoteForm } from "./note";
import { z } from "zod";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import tradeOperations from "@/graphql/operations/trade-operations";
import { useMutation } from "@apollo/client";

export const UpdateJournalSchema = z.object({
  outcome: z.enum(["WON", "LOST", "BREAKEVEN"]),
  tradeNote: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

interface UpdateJournalProps {
  tradeId: string;
}

export default function UpdateJournal({ tradeId }: UpdateJournalProps) {
  const [step, setStep] = useState(1);

  const stepContent = [
    {
      title: "How Did Your Trade End?",
      description:
        "Every trade tells a story – and today, you're the narrator. Select the outcome that best describes your recent trading experience:",
      fields: ["outcome"],
    },
    {
      title: "Let's Dive Deeper into Your Trade",
      description:
        "Every trade is more than just numbers – it's a moment of learning and growth. Take a moment to reflect on your trade. What insights can you share?",
      fields: ["note"],
    },
  ];

  const totalSteps = stepContent.length;

  const [updateTrade] = useMutation(tradeOperations.Mutations.updateTrade);

  const form = useForm<z.infer<typeof UpdateJournalSchema>>({
    resolver: zodResolver(UpdateJournalSchema),
  });

  function onSubmit(data: z.infer<typeof UpdateJournalSchema>) {
    updateTrade({
      variables: {
        updateTradeId: tradeId,
        input: data,
      },
    });
  }

  const handleContinue = async () => {
    if (step < totalSteps) {
      // Get the fields to validate for the current step
      const currentStepFields = stepContent[step - 1].fields as (keyof z.infer<
        typeof UpdateJournalSchema
      >)[];

      // Validate only the fields for the current step
      const isValid = await form.trigger(currentStepFields);

      if (isValid) {
        setStep(step + 1);
      }
    }
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) setStep(1);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="ghost">Update Journal</Button>
      </DialogTrigger>
      <DialogContent className="gap-0 p-0 [&>button:last-child]:text-white">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-2"
          >
            <div className="p-2"></div>
            <div className="space-y-6 px-6 pt-3 pb-6">
              <DialogHeader>
                <DialogTitle>{stepContent[step - 1].title}</DialogTitle>
                <DialogDescription>
                  {stepContent[step - 1].description}
                </DialogDescription>
              </DialogHeader>

              {step === 1 && <SelectOutcome form={form} />}
              {step === 2 && <NoteForm form={form} />}

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex justify-center space-x-1.5 max-sm:order-1">
                  {[...Array(totalSteps)].map((_, index) => (
                    <div
                      key={index}
                      className={cn(
                        "h-2 w-2 rounded-full transition-colors",
                        index + 1 === step
                          ? "bg-primary"
                          : index + 1 < step
                          ? "bg-primary/50"
                          : "bg-muted"
                      )}
                    />
                  ))}
                </div>
                <div className="flex justify-end gap-2 max-sm:order-2">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  {step === totalSteps ? (
                    <Button type={step === totalSteps ? "submit" : "button"}>
                      Submit
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleContinue}
                      className="gap-2"
                    >
                      Continue
                      <ArrowRightIcon className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
