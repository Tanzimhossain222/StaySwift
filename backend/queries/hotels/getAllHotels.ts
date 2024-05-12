import { modifyArrayData } from "@/app/utils/data-utils";
import { dbConnect } from "@/backend/db/connectDb";
import { hotelModel } from "@/backend/models/hotel-model";

export interface IHotelInfo {
    id: string;
    name: string;
    city: string;
    highRate: number ;
    lowRate: number ;
    propertyCategory: number;
    thumbNailUrl?: string
}
  
export async function getAllHotels(): Promise<IHotelInfo[]> {
    await dbConnect();
    try { 
        const hotels: IHotelInfo[] = await hotelModel.find()
        .select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory"])
        .lean();
        
        return modifyArrayData(hotels); 
    } catch (err) {
        throw err; 
    }
}
