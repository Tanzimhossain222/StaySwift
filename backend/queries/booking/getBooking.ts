import { dbConnect } from "@/backend/db/connectDb";
import { IBooking, bookingModel } from "@/backend/models/booking-model";

export interface HotelData {
    id: string;
    hotelId: string;
    checkin: string;
    checkout: string;
}

export const getBookingbyUser = async (userId: string): Promise<HotelData[]> => {
    try {
        await dbConnect();
    
        const res : IBooking[] = await bookingModel.find({ userId }).lean();

        const hotelData: HotelData[] = res.map(cur => ({
            id: cur._id ? cur._id.toString() : '',
            hotelId: cur.hotelId.toString(),
            checkin: cur.checkin,
            checkout: cur.checkout
        }));
        
        return hotelData;
    
    } catch (err) {
        throw new Error((err as Error).toString());
    }
}
