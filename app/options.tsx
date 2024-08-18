export default function Options() {
    // TODO implement both with new state thing
    return (
        <div>
            <button
                onClick={() => {
                    try {
                        alert("stored in localstorage");
                    } catch {
                        alert("error storing in localstorage");
                    }
                }}
            >
                Set As JSON
            </button>
            <button
                onClick={async () => {
                    await navigator.clipboard.writeText("");
                    alert("copied to clipboard");
                }}
            >
                Copy As JSON
            </button>
        </div>
    );
}
