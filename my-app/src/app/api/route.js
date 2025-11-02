import User from "@/lib/models";
import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request) {
    try {
        const token = crypto.randomUUID();
        const body = await request.json();

        await connectMongoDB();

        const user = await User.create({
            token: `/text/${token}`,
            text: body.text,
            time: body.time,
            expireAt: new Date(Date.now() + 20 * 1000),
        });

        await User.collection.createIndex(
            { expireAt: 1 },
            { expireAfterSeconds: 0 }
        );

        return NextResponse.json(
            {
                message: "Data received successfully",
                user,
                link: `text/${token}`,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json(
            { error: "Failed to create link" },
            { status: 500 }
        );
    }
}

export async function GET(request) {
    const id = request.url.toString().split("=")[1];

    await connectMongoDB();

    const user = await User.find({ token: `/text/${id}` });
    console.log(user);

    // try {
    //     const user = await User.find({ token: `/text/${id}` });
    //     console.log(user);
    // } catch (error) {
    //     console.log("error", error);
    // }
}
