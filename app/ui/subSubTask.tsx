import { getTaskLocalStorage, setTaskLocalStorage } from "@/lib/helpers";
import { Task, TaskID } from "@/lib/types";
import { FocusEvent, useEffect, useState } from "react";

export default function SubSubTask({ id }: { id: TaskID }) {
    const [task, setTask] = useState<Task | null>(null);

    useEffect(() => {
        setTask(getTaskLocalStorage(id));
    }, [id]);

    useEffect(() => {
        if (task) {
            setTaskLocalStorage(id, task);
        }
    }, [task, id]);

    if (!task) {
        return null;
    }

    return (
        <span
            className="bg-secondary rounded inline-flex p-1 px-2"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e: FocusEvent) => {
                const newName = e.currentTarget.textContent ?? "";
                setTask({ ...task, name: newName });
            }}
        >
            {task.name}
        </span>
    );
}
