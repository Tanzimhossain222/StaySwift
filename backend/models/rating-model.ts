import mongoose, { Schema } from "mongoose";

interface IRating{
    hotelId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    rating: number;
}

const ratingSchema = new Schema<IRating>({
    hotelId: {
        required: true,
        type: Schema.Types.ObjectId
    },
    userId: {
        required: true,
        type: Schema.Types.ObjectId
    },
    rating: {
        required: true,
        type: Number
    }
});

export const ratingModel = mongoose.models.ratings ?? mongoose.model<IRating>("ratings", ratingSchema);
