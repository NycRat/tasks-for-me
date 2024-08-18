import SubSubTask from "@/app/ui/subSubTask";
import { getTaskLocalStorage, setTaskLocalStorage } from "@/lib/helpers";
import { Task, TaskID } from "@/lib/types";
import { useRouter } from "next/navigation";
import { FocusEvent, useEffect, useState } from "react";

interface StepComponentProps {
    id: TaskID;
    handleRemove: () => void;
}

export default function SubTask({ id, handleRemove }: StepComponentProps) {
    const [task, setTask] = useState<Task | null>(null);
    const router = useRouter();

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
        <div className="bg-surface rounded border border-highlight p-3 space-y-2">
            <h3 className="text-lg flex items-center justify-between">
                <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e: FocusEvent) => {
                        const newName = e.currentTarget.textContent ?? "";
                        setTask({
                            ...task,
                            name: newName,
                        });
                    }}
                >
                    {task.name}
                </span>
                <span className="text-right space-x-2">
                    <button className="icon" onClick={handleRemove}>
                        delete
                    </button>
                    <button
                        className="icon"
                        onClick={() => {
                            router.push(`/task?id=${id}`);
                        }}
                    >
                        open_in_full
                    </button>
                </span>
            </h3>

            <div className="border-t-2 border-highlight"></div>

            {task.subTasks.length !== 0 && (
                <div className="space-x-3 mt-3">
                    {task.subTasks.map((subTaskID) => (
                        <SubSubTask key={subTaskID} id={subTaskID} />
                    ))}
                </div>
            )}
        </div>
    );
}
