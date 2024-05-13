import { bookingController } from "@/backend/controllers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const {hotelId, userId, checkin, checkout} = await req.json();

    try {
        const res = await bookingController({hotelId, userId, checkin, checkout});

    if (res.code === 201) {
        return new NextResponse(res.message, {status: res.code} )
    } else {
        return new NextResponse(res.error, {status: res.code})
    }
        
    } catch (err) {
        return new NextResponse((err as Error).toString(), {status: 500})
    }

}