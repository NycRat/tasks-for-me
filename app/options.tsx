import Button from "@/app/ui/button";

export default function Options() {
    // TODO implement both with new state thing
    return (
        <div className="space-x-2">
            <Button
                onClick={() => {
                    try {
                        alert("stored in localstorage");
                    } catch {
                        alert("error storing in localstorage");
                    }
                }}
            >
                Set As JSON
            </Button>
            <Button
                onClick={async () => {
                    await navigator.clipboard.writeText("");
                    alert("copied to clipboard");
                }}
            >
                Copy As JSON
            </Button>
        </div>
    );
}
