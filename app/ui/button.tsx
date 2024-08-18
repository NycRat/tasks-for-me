export default function Button(props: any) {
    return (
        <button
            {...props}
            className={
                "bg-surface border border-highlight rounded hover:bg-highlight p-1 " +
                props.className
            }
        />
    );
}
