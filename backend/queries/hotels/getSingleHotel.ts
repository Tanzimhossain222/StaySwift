import { modifyObjData } from "@/app/utils/data-utils";
import { dbConnect } from "@/backend/db/connectDb";
import { hotelModel } from "@/backend/models/hotel-model";
import { findBooking } from "./findBooking";
import { IHotelInfo } from "./getAllHotels";

type IParametrs = {
    id: string;
    checkin: string;
    checkout: string;
}

export interface IInfo extends IHotelInfo {
    gallery: string[];
    overview: string;
  }
  

export async function getHotelById({id, checkin, checkout}: IParametrs) : Promise<IInfo>{
    try {
        await dbConnect();
        const hotel : IInfo | null = await hotelModel.findById(id).lean();

        if (!hotel) {
            return {} as IInfo;
        }

        if(checkin && checkout){
            const found = await findBooking({hotelId: hotel._id   , checkin, checkout});
            if (found) {
                hotel.isBooked = true;
            } else {
                hotel.isBooked = false;
            }
        }

        return modifyObjData(hotel)
        
    } catch (err) {
        console.log(err)
    }

    return {} as IInfo;
}