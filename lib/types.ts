export type TaskID = string;

export interface Task {
    name: string;
    subTasks: TaskID[];
    start?: Date;
    end?: Date;
}
