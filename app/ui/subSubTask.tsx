import { TaskID } from "@/lib/types";

export default function SubSubTask({ id }: { id: TaskID }) {
    return <li>{id}</li>;
}
