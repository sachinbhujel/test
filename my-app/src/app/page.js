"use client";

import { useState } from "react";

export default function Home() {
    const [link, setLink] = useState("");
    const data = {
        text: "Hi test",
        time: 1760975950037,
    };

    const handleTextLink = async () => {
        try {
            const res = await fetch("/api", {
                method: "POST",
                body: JSON.stringify({ text: data.text, time: data.time }),
                headers: { "content-Type": "application/json" },
            });

            const result = await res.json();
            setLink(result.link);
        } catch (error) {
            console.log("Server error, please try again later.");
        }
    };

    return (
        <div className="">
            <h1>Text link expires</h1>
            <button
                className="bg-black text-white p-2"
                onClick={handleTextLink}
            >
                Share
            </button>

            <a href={`/${link}`} className="underline">
                This is the link
            </a>
        </div>
    );
}
