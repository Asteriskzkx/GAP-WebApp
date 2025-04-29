import { NextRequest, NextResponse } from "next/server";
import { userController } from "@/controllers/userController";

// GET /api/users/:id
export async function GET(
    req: NextRequest,
    context: { params: { id: string } }
) {
    const userID = parseInt(context.params.id);

    if (isNaN(userID)) {
        return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const user = await userController.getById(userID);
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
}

// PUT /api/users/:id
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const userID = parseInt(params.id);
    if (isNaN(userID)) {
        return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    try {
        const body = await req.json();
        const { email, password, role } = body;

        // ตรวจสอบข้อมูลที่จำเป็น
        if (!email || !password || !role) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // เรียกฟังก์ชัน update ของ userController
        const updatedUser = await userController.update(userID, { email, password, role });

        if (!updatedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(updatedUser);
    } catch (error: unknown) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 });
    }
}

// DELETE /api/users/:id
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const userID = parseInt(params.id);
    if (isNaN(userID)) {
        return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    try {
        const deletedUser = await userController.delete(userID);

        if (!deletedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "User deleted successfully" });
    } catch (error: unknown) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 });
    }
}
