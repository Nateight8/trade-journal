import Carlender from "./_components/carlender";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function Page() {
  return (
    <ScrollArea className="h-[80vh] w-full relative">
      <Carlender />
    </ScrollArea>
  );
}
