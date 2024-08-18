"use client";

import TaskUI from "@/app/ui/task";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function TaskPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [id, setID] = useState("");

    useEffect(() => {
        setID(searchParams.get("id") ?? "");
    }, [searchParams]);

    if (!id) {
        return <div>task does not exist</div>;
    }

    return (
        <main>
            {/* TODO make default "/" if no history */}
            <button onClick={router.back}>back</button>
            <TaskUI id={id} />
        </main>
    );
}

export default function Page() {
    return (
        <Suspense>
            <TaskPage />
        </Suspense>
    );
}
