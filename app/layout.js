"use client"

import "./globals.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function RootLayout({ children }) {
  const router = useRouter()
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen justify-between">
          <main className="p-2">
            {children}
          </main>
          <nav className="flex bg-white shadow-md">
            <Button onclik={() => router.push('/people')} className="w-1/2 py-3 rounded-none hover:bg-primary hover:text-white">ລາຍຊື່</Button>
            <Button onclik={() => router.push('/summaries')} className="w-1/2 bg-white text-black rounded-none hover:bg-primary hover:text-white">ລວມ</Button>
          </nav>
        </div>
      </body>
    </html>
  );
}
