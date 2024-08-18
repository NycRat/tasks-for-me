"use client";

import Options from "@/app/options";
import TaskUI from "@/app/ui/task";

export default function Home() {
    return (
        <main>
            <h1>This Is My App For Tasks</h1>
            <Options />

            <TaskUI id="0" />
        </main>
    );
}
