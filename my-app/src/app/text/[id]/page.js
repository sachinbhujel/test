"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function Text() {
    const [user, setUser] = useState("");
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api?id=${params.id}`, {
                method: "GET",
            });

            const data = await res.json();
            console.log("Data", data);
        };

        fetchData();
    }, [params]);

    return (
        <div>
            <h1>Welcome back</h1>
            <h1>{user}</h1>{" "}
        </div>
    );
}

export default Text;
