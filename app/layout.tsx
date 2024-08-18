import "@/app/ui/globals.css";
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
            <body className={chakraPetch.className}>{children}</body>
        </html>
    );
}
