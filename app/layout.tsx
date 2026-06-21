import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import ClientLogic from "@/components/ClientLogic";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sai Likhith Kanuparthi | Senior ML Infrastructure & GenAI Engineer",
  description: "Senior ML Infrastructure and Generative AI Engineer at Airbnb specializing in large-scale LLM application routing, model data labeling stacks, and high-performance backend pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030303]">
        <div id="cursor" className="cursor"></div>
        <div id="cursor-dot" className="cursor-dot"></div>
        <ClientLogic />
        {children}
      </body>
    </html>
  );
}
