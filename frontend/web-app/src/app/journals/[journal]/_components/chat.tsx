import ChatInput from "./chat-input";
import Messages from "./messages";

export default function ChatClient() {
  return (
    <>
      <div className="flex h-[100svh] flex-col">
        <header className="flex-shrink-0 border-b h-16">
          {/* <ChatAppbar /> */}
        </header>
        <main className="flex-1 overflow-hidden">
          <Messages />
        </main>
        <footer className="flex-shrink-0 ">
          <ChatInput />
        </footer>
      </div>
    </>
  );
}
