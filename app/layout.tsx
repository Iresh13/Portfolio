import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { Providers } from "./provider";

const sourGrummy = localFont({
  src: "./fonts/SourGrummyVF.ttf",
  variable: "--font-sour-grummy",
  weight: "100 300 200 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Iresh",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" sizes="32x32" href="./iresh.png" />
      <body
        className={`${sourGrummy.className} antialiased lg:overflow-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
