import { dbConnect } from "@/backend/db/connectDb";
import { bookingModel } from "@/backend/models/booking-model";
import mongoose from "mongoose";

export const bookingHotel = async (
  hotelId: string,
  userId: string,
  checkin: string,
  checkout: string
) => {
  const payload = {
    hotelId: new mongoose.Types.ObjectId(hotelId),
    userId: new mongoose.Types.ObjectId(userId),
    checkin,
    checkout,
  };

  try {

    const res = await bookingModel.create(payload);
    return res;

  } catch (err) {
    throw new Error((err as Error).toString());
  }
};
