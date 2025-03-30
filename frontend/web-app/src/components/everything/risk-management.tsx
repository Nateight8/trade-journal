"use client";
import * as React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import NumberInput from "../ui/number-input";

import { UseFormReturn } from "react-hook-form";

interface RiskManagementProps {
  form: UseFormReturn<{
    instrument: string;
    strategy: string;
    setupRating: number;
    entryPrice: number;
    stopLoss: number;
    takeProfit: number;
    notes?: string;
  }>;
}

export default function RiskManagement({ form }: RiskManagementProps) {
  return (
    <>
      <div className="grid w-full items-center gap-4">
        <FormField
          control={form.control}
          name="entryPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Entry price</FormLabel>
              <FormControl>
                <NumberInput
                  placeholder="eg: 1.2345"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stopLoss"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stop loss</FormLabel>
              <FormControl>
                <NumberInput
                  placeholder="eg: 1.2345"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="takeProfit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Take profit</FormLabel>
              <FormControl>
                <NumberInput
                  placeholder="eg: 1.2345"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
