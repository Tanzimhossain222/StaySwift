import { modifyArrayData } from "@/app/utils/data-utils";
import { dbConnect } from "@/backend/db/connectDb";
import { hotelModel } from "@/backend/models/hotel-model";
import { findBooking } from "./findBooking";

export interface IHotelInfo {
    id: string;
    name: string;
    city: string;
    highRate: number ;
    lowRate: number ;
    propertyCategory: number;
    thumbNailUrl?: string,
    isBooked?: boolean,
    _id: string,
    [key: string]: any;
}

type paraMeter = {
    destination: string;
    checkin: string;
    checkout: string;
}
  
export async function getAllHotels({ destination, checkin, checkout }: paraMeter): Promise<IHotelInfo[]> {
    try { 
        await dbConnect();

        const regex = new RegExp(destination, "i");

        const hotelsByDestination: IHotelInfo[] = await hotelModel
        .find({city: { $regex: regex }})
        .select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory"])
        .lean();

        let allHotels = hotelsByDestination;

        if(checkin && checkout) {
            allHotels = await Promise.all(
                allHotels.map(async (hotel)=>{
                    const found = await findBooking({hotelId: hotel._id , checkin, checkout});
    
                    if(found) {
                        hotel["isBooked"] = true;
                    } else {
                        hotel["isBooked"] = false;
                    }
    
                    return hotel;
                })
            )
        }
     
        return modifyArrayData(allHotels); 
    } catch (err) {
        throw err; 
    }
}


