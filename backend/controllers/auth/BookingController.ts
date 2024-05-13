import { bookingHotel } from "@/backend/queries/booking/booking";

export interface IBookingController {
    hotelId: string;
    userId: string;
    checkin: string;
    checkout: string;
}

export const bookingController = async ({hotelId, userId, checkin, checkout}:IBookingController) => {

    try {
     const res =   await bookingHotel(hotelId, userId, checkin, checkout);

     if (res) {

         return {message: "Booking successful", code : 201, data : res};

     } else {
            return {error: "Booking failed", code: 400};
        }
        
    } catch (err) {
        throw new Error((err as Error).toString());
    }

    
}