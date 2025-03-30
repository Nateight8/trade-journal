"use client";
import * as React from "react";

import { Input } from "@/components/ui/input";

import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RiStarFill } from "@remixicon/react";
import { useState } from "react";

export interface BasicInfoProps {
  form: UseFormReturn<{
    entryPrice: number;
    stopLoss: number;
    takeProfit: number;
    instrument: string;
    strategy: string;
    setupRating: number;
  }>;
}

export default function BasicInfo({ form }: BasicInfoProps) {
  const [hoverRating, setHoverRating] = useState("");
  const currentRating = form.watch("setupRating");

  return (
    <>
      <div className="grid w-full items-center gap-4">
        <FormField
          control={form.control}
          name="instrument"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instrument</FormLabel>
              <FormControl>
                <Input placeholder="eg: EURUSD" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="strategy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Setup type</FormLabel>
              <FormControl>
                <Input placeholder="eg: Type A" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="setupRating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How will you rate this setup?</FormLabel>
              <FormControl>
                <RadioGroup
                  className="inline-flex gap-0"
                  onValueChange={(value) => field.onChange(Number(value))}
                  defaultValue={field.value.toString()}
                >
                  {["1", "2", "3", "4", "5"].map((value) => (
                    <label
                      key={value}
                      className="group focus-within:border-ring focus-within:ring-ring/50 relative cursor-pointer rounded p-0.5 outline-none focus-within:ring-[3px]"
                      onMouseEnter={() => setHoverRating(value)}
                      onMouseLeave={() => setHoverRating("")}
                    >
                      <RadioGroupItem
                        id={`${value}`}
                        value={value}
                        className="sr-only"
                      />
                      <RiStarFill
                        size={24}
                        className={`transition-all ${
                          (hoverRating || currentRating) >= value
                            ? "text-amber-500"
                            : "text-input"
                        } group-hover:scale-110`}
                      />
                      <span className="sr-only">
                        {value} star{value === "1" ? "" : "s"}
                      </span>
                    </label>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
