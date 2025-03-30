"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";

// import TaskList from "@tiptap/extension-task-list";
// import TaskItem from "@tiptap/extension-task-item";
// import TextStyle from "@tiptap/extension-text-style";
// import { Color } from "@tiptap/extension-color";

const RichEditor = () => {
  const editor = useEditor({
    extensions: [
      Document,
      StarterKit,
      Text,

      //   Typography,
      //   TextStyle,
      //   Color,
      //   TaskList.configure({
      //     HTMLAttributes: {
      //       class: "not-prose pl-2",
      //     },
      //   }),
      //   TaskItem.configure({
      //     HTMLAttributes: {
      //       class: "flex items-start my-4",
      //     },
      //     nested: true,
      //   }),
    ],
    content: `<h2>Today's Trade: EUR/USD Breakout</h2>
<p><em>March 30, 2024</em></p>

<p>I just took a trade on EUR/USD following a breakout and retest setup. The market had been consolidating, but today it broke through a key resistance level. I waited patiently for the retest and entered when I saw confirmation signals.</p>

<p>Here's my trade setup:</p>
<ul>
  <li>Instrument: EUR/USD</li>
  <li>Strategy: Breakout and Retest</li>
  <li>Direction: Long position</li>
  <li>Entry: 1.0850</li>
  <li>Stop Loss: 1.0800</li>
  <li>Take Profit: 1.0950</li>
  <li>Risk/Reward: 1:2 (50 pips risk, 100 pips reward)</li>
  <li>Setup Quality Rating: 4/5</li>
</ul>

<p>I'm particularly pleased with this setup. The price action was clean, and the volume confirmed the breakout, giving me additional confidence. My entry at the retest level was well-timed, avoiding any FOMO or chasing.</p>

<p><strong>Stop Loss Placement:</strong></p>
<p>I placed my stop loss at 1.0800, which is below the previous swing low and the 20 EMA. The current market structure is bullish, so this gives the trade enough room to breathe while maintaining a reasonable risk level.</p>

<p><strong>Trade Management Plan:</strong></p>
<ul>
  <li>Move stop loss to breakeven once price reaches 1.0900</li>
  <li>After breakeven is secured, trail the stop loss with the 20 EMA</li>
  <li>Let the trade run to take profit if uptrend remains intact</li>
</ul>

<p><strong>What I like about this trade:</strong></p>
<ul>
  <li>Clean price action with clear market structure</li>
  <li>Volume confirmation on the breakout</li>
  <li>Perfect entry on the retest without chasing</li>
  <li>Clear stop loss placement below key technical levels</li>
  <li>Solid risk-to-reward ratio following my trading plan</li>
</ul>

<p><strong>Initial observations:</strong></p>
<ul>
  <li>Patience pays off - waiting for the retest provided a better entry</li>
  <li>Volume analysis continues to be crucial for my breakout trades</li>
  <li>Having a predefined trade management plan reduces emotional decisions</li>
  <li>This setup aligns with my monthly trading goals</li>
</ul>

<p>I'm feeling confident about this trade and will update with the outcome and additional lessons learned once it completes.</p>

<div style="border-left: 4px solid #3b82f6; padding-left: 16px; margin: 20px 0;">
  <p><strong>Trade Metrics:</strong></p>
  <ul>
    <li>Entry: 1.0850</li>
    <li>Stop Loss: 1.0800</li>
    <li>Take Profit: 1.0950</li>
    <li>Risk: 50 pips</li>
    <li>Reward: 100 pips</li>
    <li>R:R Ratio: 1:2</li>
  </ul>
</div>
    `,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="space-x-4">
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichEditor;
