import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { I18Provider } from "@/components/providers/i18-next-provider";

const montserrat = localFont({
  src: "./fonts/MontserratVF.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Markaziy eksport shtabi",
  description: "O‘simliklar karantini va himoyasi agentligi Markaziy eksport shtabi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="16x16" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <Toaster />
        <I18Provider>{children}</I18Provider>
      </body>
    </html>
  );
}
