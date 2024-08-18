import Button from "@/app/ui/button";
import { setTaskLocalStorage } from "@/lib/helpers";
import { Task, TaskID } from "@/lib/types";

export default function Options() {
    // TODO implement both with new state thing
    return (
        <div className="space-x-2">
            <Button
                onClick={() => {
                    try {
                        const tasks: [TaskID, Task][] = JSON.parse(
                            prompt("enter stuff")!
                        );

                        for (let i = 0; i < tasks.length; i++) {
                            setTaskLocalStorage(tasks[i][0], tasks[i][1]);
                        }

                        alert("stored in localstorage");
                    } catch {
                        alert("error storing in localstorage");
                    }
                }}
            >
                Set As JSON
            </Button>
            <Button
                onClick={async () => {
                    let t = new Map<TaskID, Task>();
                    for (let i = 0; i < localStorage.length; i++) {
                        if (localStorage.key(i)?.startsWith("task_")) {
                            const id: string = localStorage
                                .key(i)
                                ?.substring(5)!;

                            t.set(
                                id,
                                JSON.parse(
                                    localStorage.getItem(localStorage.key(i)!)!
                                )
                            );
                        }
                    }

                    // returns as [[id1, task1], [id2, task2], ...]
                    await navigator.clipboard.writeText(
                        JSON.stringify(Array.from(t.entries()))
                    );
                    alert("copied to clipboard");
                }}
            >
                Copy As JSON
            </Button>
        </div>
    );
}
