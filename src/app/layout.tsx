import { Navbar } from "@/components";
import Footer from "@/components/navigation/footer";

import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });



export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
                    font.className
                )}
            >
                <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} appearance={{ baseTheme: dark }}>
                    {children}
                </ClerkProvider>
            </body>
        </html>
    );
};
