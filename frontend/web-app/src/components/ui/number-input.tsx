"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Button, Group, Input, NumberField } from "react-aria-components";

export default function NumberInput({
  defaultValue,
  value,
  onChange,
  formatOptions,
  placeholder,
}: {
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  formatOptions?: Intl.NumberFormatOptions;
  placeholder?: string;
}) {
  return (
    <NumberField
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      formatOptions={formatOptions}
    >
      <div className="*:not-first:mt-2">
        <Group className="border-input doutline-none data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 w-full items-center overflow-hidden rounded-md border text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] data-disabled:opacity-50 data-focus-within:ring-[3px]">
          <Input
            placeholder={placeholder}
            className="bg-background text-foreground flex-1 px-3 py-2 tabular-nums"
          />
          <div className="flex h-[calc(100%+2px)] flex-col">
            <Button
              slot="increment"
              className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronUpIcon size={12} aria-hidden="true" />
            </Button>
            <Button
              slot="decrement"
              className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronDownIcon size={12} aria-hidden="true" />
            </Button>
          </div>
        </Group>
      </div>
    </NumberField>
  );
}
