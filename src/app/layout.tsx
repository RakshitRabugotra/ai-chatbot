import type { Metadata } from "next";
// Fonts
import { DM_Sans } from "next/font/google";
import { Space_Mono } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/component/navbar";

const fontHeading = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Playground Clone",
  description: "A clone of Playground using Next.js and Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "flex flex-col",
          "antialiased",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <header className="w-full mx-auto max-w-4xl px-4 py-6 md:px-6">
              <Navbar />
            </header>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
