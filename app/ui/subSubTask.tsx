import { getTaskLocalStorage } from "@/lib/helpers";
import { TaskID } from "@/lib/types";

export default function SubSubTask({ id }: { id: TaskID }) {
    const task = getTaskLocalStorage(id);

    return (
        <span className="bg-secondary rounded inline-flex p-1 px-2">
            {task.name}
        </span>
    );
}
