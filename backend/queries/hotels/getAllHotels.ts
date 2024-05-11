import { modifyArrayData } from "@/app/utils/data-utils";
import { hotelModel, IHotel } from "@/backend/models/hotel-model";

export async function getAllHotels(): Promise<IHotel[]> {
    try { 
        const hotels: IHotel[] = await hotelModel.find().lean();
        return modifyArrayData(hotels); 
    } catch (err) {
        throw err; 
    }
}
