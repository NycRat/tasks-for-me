import { Task, TaskID } from "@/lib/types";

export function defaultTask(): Task {
    return {
        name: "_default",
        subTasks: [],
    };
}

// TODO make return undefined if doesnt exist
export function getTaskLocalStorage(id: TaskID): Task {
    if (typeof window === "undefined") {
        return defaultTask();
    }

    const storedTask = localStorage.getItem(`task_${id}`);
    if (!storedTask) {
        return defaultTask();
    }

    try {
        const task: Task = JSON.parse(storedTask);
        return task;
    } catch {
        setTaskLocalStorage(id, defaultTask());
        return defaultTask();
    }
}

export function setTaskLocalStorage(id: TaskID, task: Task) {
    localStorage.setItem(`task_${id}`, JSON.stringify(task));
}
