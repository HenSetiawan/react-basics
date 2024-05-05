import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn Dashboard",
  description: "shadcn and next js dashboard example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full flex justify-between`}>
        <Sidebar />
        <main className="h-full w-full">
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
