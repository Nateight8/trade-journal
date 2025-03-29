import Journals from "./_components/journals";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[calc(100vh-64px)] flex">
      <Journals />
      <div className="flex-1">{children}</div>
    </div>
  );
}
