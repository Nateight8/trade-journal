"use client";

import { ArrowLeftToLine, FlipHorizontalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function OpenSidePannel({
  setViewMode,
  side,
}: {
  setViewMode: (viewMode: "left" | "right" | "split") => void;
  side: "left" | "right";
}) {
  const toggleSplitView = () => {
    setViewMode("split");
  };

  const showWhichPanel = () => {
    setViewMode(side);
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
              variant="outline"
              size="icon"
              aria-label="Flip Horizontal"
              onClick={showWhichPanel}
            >
              <ArrowLeftToLine size={16} aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs">
            Open notebook
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
              variant="outline"
              size="icon"
              aria-label="Flip Horizontal"
              onClick={toggleSplitView}
            >
              <FlipHorizontalIcon size={16} aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs">
            Split view
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}

{
  /* <div className="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">

<Button
  className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
  variant="outline"
  size="icon"
  aria-label="Flip Vertical"
>
  <FlipVerticalIcon size={16} aria-hidden="true" />
</Button>
</div> */
}
