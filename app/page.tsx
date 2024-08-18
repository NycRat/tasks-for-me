"use client";

import Options from "@/app/options";
import TaskUI from "@/app/ui/task";

export default function Home() {
    return (
        <main>
            <h1 className="text-2xl font-bold">This Is My App For Tasks</h1>
            <Options />

            <br />

            <TaskUI id="0" />
        </main>
    );
}
