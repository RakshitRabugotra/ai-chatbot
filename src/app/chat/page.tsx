import { ChatList } from "@/components/component/chat-list";
import { cn } from "@/lib/utils";

export default async function Home() {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center flex-1",
        "bg-background text-foreground font-body"
      )}
    >
      <Heading />
      <ChatList action="chat" />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <h1 className="text-3xl font-bold">Generate AI-Powered Images</h1>
      <p className="text-muted-foreground">
        Enter a prompt to create a unique image.
      </p>
    </div>
  );
}
