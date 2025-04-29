import { NextRequest, NextResponse } from "next/server";
import { userController } from "@/controllers/userController";

// GET /api/users
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_: NextRequest) {
    try {
        const users = await userController.getAll();
        return NextResponse.json(users);
    } catch (error: unknown) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 });
    }
}

// POST /api/users
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password, role } = body;

        if (!email || !password || !role) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const newUser = await userController.create({ email, password, role });
        return NextResponse.json(newUser, { status: 201 });
    } catch (error: unknown) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 });
    }
}
