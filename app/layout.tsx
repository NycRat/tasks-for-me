import "@/app/ui/globals.scss";
import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";

const chakraPetch = Chakra_Petch({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tasks For Me",
    description: "a kanban board organizer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                />
            </head>
            <body className={chakraPetch.className + " bg-background"}>
                {children}
            </body>
        </html>
    );
}
