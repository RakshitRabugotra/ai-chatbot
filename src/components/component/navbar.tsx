import Link from "next/link";
import { AuthButton } from "./auth-button";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <ImageIcon className="w-6 h-6 text-primary" />
        <span className="text-lg font-medium">AI Chatbot</span>
      </Link>
      <div className="flex items-center gap-4">
        <AuthButton />
        <ThemeToggle />
      </div>
    </nav>
  );
}

function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
