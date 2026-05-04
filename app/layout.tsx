import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
            <main style={{ paddingTop: "72px", paddingLeft: "140px", paddingRight: "140px" }}>
                {children}
            </main>
            <Analytics />
            <SpeedInsights />
        </body>
        </html>
    );
}