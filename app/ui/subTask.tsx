import SubSubTask from "@/app/ui/subSubTask";
import { getTaskLocalStorage } from "@/lib/helpers";
import { TaskID } from "@/lib/types";
import { useRouter } from "next/navigation";

interface StepComponentProps {
    id: TaskID;
    handleRemove: () => void;
}

export default function SubTask({ id, handleRemove }: StepComponentProps) {
    const task = getTaskLocalStorage(id);
    const router = useRouter();

    return (
        <div className="bg-surface rounded border border-highlight p-3 space-y-2">
            <h3 className="text-lg flex items-center justify-between">
                {task.name}
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
