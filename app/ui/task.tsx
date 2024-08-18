import SubTask from "@/app/ui/subTask";
import { getTaskLocalStorage, setTaskLocalStorage } from "@/lib/helpers";
import { Task, TaskID } from "@/lib/types";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function TaskUI({ id }: { id: TaskID }) {
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
        <div>
            {task.name}
            {task.subTasks.map((subTaskID) => (
                <SubTask key={subTaskID} id={subTaskID} handleAdd={() => {}} />
            ))}
            <button
                onClick={() => {
                    setTask({
                        ...task,
                        subTasks: [...task.subTasks, uuid()],
                    });
                }}
            >
                Add Step
            </button>
        </div>
    );
}
