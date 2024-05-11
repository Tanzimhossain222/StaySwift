import mongoose, { Schema } from "mongoose";

interface IReview  {
    hotelId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    review: string;
}

const reviewSchema = new Schema<IReview>({
    hotelId: {
        required: true,
        type: Schema.Types.ObjectId
    },
    userId: {
        required: true,
        type: Schema.Types.ObjectId
    },
    review: {
        required: true,
        type: String
    }
});

export const reviewModel = mongoose.models.reviews ?? mongoose.model<IReview>("reviews", reviewSchema);
