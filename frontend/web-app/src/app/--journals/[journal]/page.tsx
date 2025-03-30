export default function JournalPage() {
  return (
    <div className="flex h-full">
      {/* Chat UI Side */}
      <div className="w-1/2 border-r border-border">
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-border rounded-t-md">
            <h2 className="text-lg font-semibold">Chat</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {/* Chat messages will go here */}
          </div>
          <div className="p-4 border-t border-border rounded-b-md">
            <ChatInput />
          </div>
        </div>
      </div>

      {/* Editor Side */}
      <div className="w-1/2 p-4">
        <div className="h-full rounded-md border border-border">
          <Tiptap />
        </div>
      </div>
    </div>
  );
}
