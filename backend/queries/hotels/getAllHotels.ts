import { modifyArrayData } from "@/app/utils/data-utils";
import { dbConnect } from "@/backend/db/connectDb";
import { hotelModel, IHotel } from "@/backend/models/hotel-model";

export async function getAllHotels(): Promise<IHotel[]> {
    await dbConnect();
    try { 
        const hotels: IHotel[] = await hotelModel.find().lean();
        return modifyArrayData(hotels); 
    } catch (err) {
        throw err; 
    }
}
