import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Nav from "@/components/globals/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const satoshi = localFont({
  src:[
    {
      path: './fonts/Satoshi-Regular.otf'
    },
    {
      path: './fonts/Satoshi-Black.otf'
    },
    {
      path: './fonts/Satoshi-Bold.otf'
    },
    {
      path: './fonts/Satoshi-Light.otf'
    },
    {
      path: './fonts/Satoshi-Medium.otf'
    },
  ]
})

export const metadata: Metadata = {
  title: "Mailer - Effortless mailing service to your clients.",
  description: "Mailer is an effortless mailing service software designed by xynder to assist businesses post mail to your clients..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} antialiased bg-[#f1f1f1] `}
      >
         <Nav/>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
