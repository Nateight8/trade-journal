import Journal from "@/components/everything/journal";
import ChatInput from "./[journal]/_components/chat-input";

export default function JournalPage() {
  return (
    <div className="flex items-center justify-center size-full border  p-4">
      {/* <ChatInput /> */}
      <Journal />
    </div>
  );
}
