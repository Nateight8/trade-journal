import ChatInput from "./chat-input";
import Messages from "./messages";
import OpenSidePannel from "./open-side-pannel";

export default function ChatClient({
  setViewMode,
}: {
  setViewMode: (viewMode: string) => void;
}) {
  return (
    <>
      <div className="flex h-[100svh] flex-col">
        <header className="flex-shrink-0 border-b h-16 flex justify-end items-center p-4">
          <OpenSidePannel setViewMode={setViewMode} side={"left"} />
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
