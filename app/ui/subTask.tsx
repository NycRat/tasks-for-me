import SubSubTask from "@/app/ui/subSubTask";
import { getTaskLocalStorage } from "@/lib/helpers";
import { Task, TaskID } from "@/lib/types";
import Link from "next/link";

interface StepComponentProps {
    id: TaskID;
    handleAdd: () => void;
}

export default function SubTask({ id, handleAdd }: StepComponentProps) {
    const task = getTaskLocalStorage(id);

    return (
        <Link href={`/task?id=${id}`}>
            <div>
                {task.name} ({id})
                {task.subTasks.length !== 0 && (
                    <ol>
                        {task.subTasks.map((subTaskID) => (
                            <SubSubTask key={subTaskID} id={subTaskID} />
                        ))}
                    </ol>
                )}
            </div>
        </Link>
    );
}
