"use client";

import { useEffect, useState } from "react";
import { Stuff } from "./stuff";

function defaultStuff() {
  return {
    name: "Life",
    others: [],
  };
}

function getStuff() {
  if (typeof window === "undefined") {
    return defaultStuff();
  }

  const stuff = localStorage.getItem("stuff");
  if (!stuff) {
    return defaultStuff();
  }

  try {
    const ha: Stuff = JSON.parse(stuff);
    return ha;
  } catch {
    return defaultStuff();
  }
}

function StuffComponent({ stuff }: { stuff: Stuff }) {
  return (
    <div className="stuff">
      {stuff.name}{" "}
      <button onClick={() => {}} className="add-button">
        +
      </button>
      {stuff.others &&
        stuff.others.map((other, i) => (
          <StuffComponent stuff={other} key={i} />
        ))}
    </div>
  );
}

export default function Home() {
  const [stuffs, setStuffs] = useState<Stuff>(getStuff());

  useEffect(() => {
    localStorage.setItem("stuff", JSON.stringify(stuffs));
  }, [stuffs]);

  return (
    <main>
      <h1>This My App for Stuff</h1>
      <button
        onClick={() => {
          const inputstuff = prompt("stuff?");
          if (!inputstuff) {
            alert("DIDNT WORK");
            return;
          }
          try {
            const ha: Stuff = JSON.parse(inputstuff);
            setStuffs(ha);
            alert("WORKED");
          } catch {
            alert("DIDNT WORK");
          }
        }}
      >
        set stuff
      </button>
      <StuffComponent stuff={stuffs} />
    </main>
  );
}
