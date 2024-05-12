import { modifyArrayData } from "@/app/utils/data-utils";
import { dbConnect } from "@/backend/db/connectDb";
import { ratingModel } from "@/backend/models/rating-model";
import { reviewModel } from "@/backend/models/review-model";


interface IRating {
    id: string
    hotelId: string
    userId: string
    rating: number
}

export async function getRatingsForAHotel(hotelId: string) : Promise<IRating[]>{
    try {
        await dbConnect();
        const ratings:IRating[] = await ratingModel.find({hotelId: hotelId}).lean();
        return modifyArrayData(ratings)
    } catch (err) {
        console.log(err)
    }
    return [];
}

// Review  Query  for a hotel
interface IReview {
id: string
hotelId : string
userId : string
}

export async function getReviewsForAHotel(hotelId: string): Promise<IReview[]> {
    try {
        await dbConnect();
        const reviews: IReview[] = await reviewModel.find({ hotelId: hotelId }).lean();
        return modifyArrayData(reviews)

    } catch (err) {
        console.log(err)
    }
    
    return [];
}

