"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { useState, useEffect } from "react";

const pulseVariants = cva("relative rounded-full transition-colors", {
  variants: {
    size: {
      sm: "h-2 w-2",
      md: "h-3 w-3",
      lg: "h-4 w-4",
    },
    variant: {
      success: "bg-green-500",
      warning: "bg-yellow-500",
      error: "bg-red-500",
      info: "bg-blue-500",
      muted: "bg-gray-400",
      default: "bg-primary",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export interface PulsatingDotProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pulseVariants> {
  active?: boolean;
  pulseColor?: string;
}

export function PulsatingDot({
  className,
  variant,
  size,
  active = true,
  pulseColor,
  ...props
}: PulsatingDotProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <span className="relative inline-flex">
      <span
        className={cn(pulseVariants({ variant, size }), className)}
        {...props}
      />
      {active && (
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-75"
          style={{
            backgroundColor: pulseColor
              ? pulseColor
              : variant === "success"
              ? "rgb(34, 197, 94)"
              : variant === "warning"
              ? "rgb(234, 179, 8)"
              : variant === "error"
              ? "rgb(239, 68, 68)"
              : variant === "info"
              ? "rgb(59, 130, 246)"
              : variant === "muted"
              ? "rgb(156, 163, 175)"
              : "hsl(var(--primary))",
          }}
        />
      )}
    </span>
  );
}
