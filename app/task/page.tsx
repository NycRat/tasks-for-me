"use client";

import TaskUI from "@/app/ui/task";
import { getTaskLocalStorage } from "@/lib/helpers";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function TaskPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [id, setID] = useState("");

    useEffect(() => {
        const newID = searchParams.get("id") ?? "";
        setID(newID);
        document.title = `Tasks For Me | ${getTaskLocalStorage(newID).name}`;
    }, [searchParams]);

    if (!id) {
        return <div>task does not exist</div>;
    }

    return (
        <main>
            {/* TODO make default "/" if no history */}
            <button onClick={router.back} className="icon text-xl">
                arrow_back
            </button>
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
