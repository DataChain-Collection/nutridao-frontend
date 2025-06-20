"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import {ThemeProvider} from "next-themes";
import {Inter} from "next/font/google";
import "../globals.css";
import ToasterContext from "../context/ToastContext";
import dynamic from "next/dynamic";

const inter = Inter({subsets: ["latin"]});

// Dynamically import the client-only Web3Provider wrapper
const AppWeb3Wrapper = dynamic(() => import("../context/AppWeb3Wrapper"), { ssr: false });

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="dark"
        >
                <Lines/>
                <ToasterContext/>
                <AppWeb3Wrapper>
                    <Header/>
                    {children}
                    <Footer/>
                </AppWeb3Wrapper>
                <ScrollToTop/>
        </ThemeProvider>
        </body>
        </html>
    );
}
