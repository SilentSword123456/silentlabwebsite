import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TesseractShell from "@/components/TesseractShell"

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SilentLab",
    icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={geist.className}>
        <body>
            <Navbar />
            <TesseractShell/>
            {children}
        </body>
        </html>
    );
}