import { BottomNav } from "@/components/bottom-nav"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brewing Coffee Track",
  description: "Track your coffee brewing adventures",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="pb-16">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  )
}
