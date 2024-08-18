import Button from "@/app/ui/button";
import SubTask from "@/app/ui/subTask";
import { getTaskLocalStorage, setTaskLocalStorage } from "@/lib/helpers";
import { Task, TaskID } from "@/lib/types";
import { FocusEvent, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function TaskUI({ id }: { id: TaskID }) {
    // TODO fix repeating code
    const [task, setTask] = useState<Task | null>(null);

    useEffect(() => {
        setTask(getTaskLocalStorage(id));
    }, [id]);

    useEffect(() => {
        if (task) {
            setTaskLocalStorage(id, task);
        }
    }, [id, task]);

    if (!task) {
        return <main>loading...</main>;
    }

    return (
        <div className="space-y-3">
            <h2
                className="text-xl font-bold"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e: FocusEvent) => {
                    const newName = e.currentTarget.textContent ?? "";
                    setTask({ ...task, name: newName });
                }}
            >
                {task.name}
            </h2>

            {task.subTasks.map((subTaskID, i) => (
                <SubTask
                    key={subTaskID}
                    id={subTaskID}
                    handleRemove={() => {
                        setTask({
                            ...task,
                            subTasks: [...task.subTasks.toSpliced(i, 1)],
                        });
                    }}
                />
            ))}
            <Button
                onClick={() => {
                    setTask({
                        ...task,
                        subTasks: [...task.subTasks, uuid()],
                    });
                }}
            >
                Add Step
            </Button>
        </div>
    );
}
