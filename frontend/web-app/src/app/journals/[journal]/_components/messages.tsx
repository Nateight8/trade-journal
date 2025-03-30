"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const mockMessages: Message[] = [
  {
    id: "1",
    role: "user",
    content:
      "I just took a trade on EUR/USD. It's a breakout and retest setup. Entry at 1.0850, stop loss at 1.0800, and take profit at 1.0950.",
    timestamp: new Date("2024-03-30T10:00:00"),
  },
  {
    id: "2",
    role: "assistant",
    content:
      "Great! Let me help you journal this trade. I notice you're using a breakout and retest strategy. The risk-to-reward ratio is 1:2 (50 pips risk, 100 pips reward). Would you like to rate your setup quality?",
    timestamp: new Date("2024-03-30T10:00:05"),
  },
  {
    id: "3",
    role: "user",
    content:
      "Yes, I'd rate it 4/5. The price action was clean, and the volume confirmed the breakout. I waited for the retest and got a good entry.",
    timestamp: new Date("2024-03-30T10:00:30"),
  },
  {
    id: "4",
    role: "assistant",
    content:
      "That's a solid rating! I've noted your setup rating. What was your reasoning behind the stop loss placement at 1.0800?",
    timestamp: new Date("2024-03-30T10:00:35"),
  },
  {
    id: "5",
    role: "user",
    content:
      "I placed it below the previous swing low and the 20 EMA. The market structure was bullish, so I wanted to give it enough room to breathe.",
    timestamp: new Date("2024-03-30T10:01:00"),
  },
  {
    id: "6",
    role: "assistant",
    content:
      "Excellent reasoning! I've recorded your trade details. Here's a summary of what I've logged:\n\n- Instrument: EUR/USD\n- Strategy: Breakout and Retest\n- Entry: 1.0850\n- Stop Loss: 1.0800\n- Take Profit: 1.0950\n- Risk/Reward: 1:2\n- Setup Rating: 4/5\n- Position: Long\n\nWould you like to add any additional notes about your trade management plan?",
    timestamp: new Date("2024-03-30T10:01:05"),
  },
  {
    id: "7",
    role: "user",
    content:
      "Yes, I plan to move my stop loss to breakeven once price reaches 1.0900, and then trail it with the 20 EMA after that.",
    timestamp: new Date("2024-03-30T10:01:30"),
  },
  {
    id: "8",
    role: "assistant",
    content:
      "Perfect! I've added your trade management plan to the journal. This is a solid approach - moving to breakeven at 1.0900 will help lock in profits, and trailing with the 20 EMA is a good way to let winners run while protecting profits. Is there anything else you'd like to add to your trade journal?",
    timestamp: new Date("2024-03-30T10:01:35"),
  },
];

export default function Messages() {
  return (
    <ScrollArea className="h-full pr-4 ">
      <div className="space-y-4 p-4 max-w-3xl mx-auto">
        {mockMessages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-lg p-3",
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              )}
            >
              <p className="text-sm whitespace-pre-line">{message.content}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
