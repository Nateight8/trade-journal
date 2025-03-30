"use client";

import { ResizableHandle } from "@/components/ui/resizable";
import { ResizablePanel } from "@/components/ui/resizable";
import { ResizablePanelGroup } from "@/components/ui/resizable";
import OpenSidePannel from "./open-side-pannel";
import { useState } from "react";

import ChatClient from "./chat";
export default function JournalClient() {
  // Three view modes: "left", "right", "split"
  const [viewMode, setViewMode] = useState("left");

  // Calculate panel sizes based on the current view mode
  const getLeftPanelSize = () => {
    switch (viewMode) {
      case "left":
        return 100;
      case "right":
        return 0;
      case "split":
        return 50;
      default:
        return 50;
    }
  };

  const getRightPanelSize = () => {
    switch (viewMode) {
      case "left":
        return 0;
      case "right":
        return 100;
      case "split":
        return 50;
      default:
        return 50;
    }
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="h-full">
      {/* Left panel - hidden when in right-only mode */}
      {viewMode !== "right" && (
        <ResizablePanel defaultSize={getLeftPanelSize()}>
          {/* <div className="w-full flex justify-end gap-2">
              <OpenSidePannel setViewMode={setViewMode} side="left" />
            </div> */}
          <ChatClient />
        </ResizablePanel>
      )}

      {/* Resizable handle - only visible in split view */}
      {viewMode === "split" && <ResizableHandle withHandle />}

      {/* Right panel - hidden when in left-only mode */}
      {viewMode !== "left" && (
        <ResizablePanel defaultSize={getRightPanelSize()}>
          <div className="h-full bg-muted/50 p-4 relative">
            <div className="w-full flex justify-end gap-2">
              <OpenSidePannel setViewMode={setViewMode} side="right" />
            </div>
            {/* Right panel content here */}
          </div>
        </ResizablePanel>
      )}
    </ResizablePanelGroup>
  );
}
