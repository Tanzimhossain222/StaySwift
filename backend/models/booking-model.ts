import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
    hotelId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    checkin: string;
    checkout: string;
    _id?: mongoose.Types.ObjectId;
}

const bookingSchema = new Schema<IBooking>({
    hotelId: {
        required: true,
        type: Schema.Types.ObjectId
    },
    userId: {
        required: true,
        type: Schema.Types.ObjectId
    },
    checkin: {
        required: true,
        type: String
    },
    checkout: {
        required: true,
        type: String
    }
});

export const bookingModel = mongoose.models.bookings || mongoose.model<IBooking>('bookings', bookingSchema);
