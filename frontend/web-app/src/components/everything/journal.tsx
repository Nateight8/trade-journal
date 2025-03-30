"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Form } from "@/components/ui/form";
import BasicInfo from "./basic-info";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import RiskManagement from "./risk-management";
import { useState } from "react";
import tradeJournalSchema from "@/lib/schemas/trade-journal";
import { useMutation } from "@apollo/client";
import tradeOperations from "@/graphql/operations/trade-operations";

type FormData = z.infer<typeof tradeJournalSchema>;

export default function Journal() {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(tradeJournalSchema),
    defaultValues: {
      instrument: "",
      strategy: "",
      setupRating: 1,
      takeProfit: undefined,
      stopLoss: undefined,
      entryPrice: undefined,
    },
  });

  const [createTrade, { loading }] = useMutation(
    tradeOperations.Mutations.createTrade,
    {
      onCompleted: (data) => {
        router.push(`/journals/${data.createTrade.id}`);
      },
    }
  );

  const [currentStep, setCurrentStep] = useState(1);

  async function onSubmit(data: FormData) {
    console.log("data", data);
    await createTrade({
      variables: {
        input: data,
      },
    });
  }

  async function handleNext() {
    const isValid = await form.trigger([
      "instrument",
      "strategy",
      "setupRating",
    ]);
    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  }

  function handlePrevious() {
    setCurrentStep(currentStep - 1);
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <Card className="w-[350px] bg-muted/40">
            <CardHeader>
              {currentStep === 1 ? (
                <CardTitle className="text-lg font-bold">Trade Setup</CardTitle>
              ) : (
                <CardTitle className="text-lg font-bold">
                  Risk Management
                </CardTitle>
              )}
            </CardHeader>
            <CardContent>
              {currentStep === 1 && <BasicInfo form={form} />}
              {currentStep === 2 && <RiskManagement form={form} />}

              <CardFooter className="flex justify-between px-0 py-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>

                {currentStep === 1 && (
                  <Button type="button" onClick={handleNext}>
                    Next
                  </Button>
                )}

                {currentStep === 2 && (
                  <Button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                )}
              </CardFooter>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
}
