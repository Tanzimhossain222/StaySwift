import { NextRequest, NextResponse } from "next/server";
import { registerController } from "@/backend/controllers/auth/registerController";


export const POST = async (req: NextRequest) => {
    const { fname, lname, email, password } = await req.json();

    try {
        const res = await registerController({ fname, lname, email, password });

        if (res.user) {
            return new NextResponse("User registered successfully", { status: 201 })
        } else if (res.error) {
            return new NextResponse(res.error, { status: res.code })
        }

    } catch (err) {
        return new NextResponse("Failed to register user", { status: 500 })
    }
}
