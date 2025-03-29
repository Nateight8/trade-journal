"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";

const BlockEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Typography],
    content:
      "<h1>Hello World!</h1><p>This is a paragraph with <strong>bold</strong> text and <em>italic</em> text.</p>",
  });

  return (
    <div className="p-4">
      <div className="space-y-4">
        <EditorContent
          editor={editor}
          className="min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
  );
};

export default BlockEditor;
