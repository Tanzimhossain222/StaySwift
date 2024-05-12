import { modifyObjData } from "@/app/utils/data-utils";
import { dbConnect } from "@/backend/db/connectDb";
import { hotelModel } from "@/backend/models/hotel-model";


export async function getHotelById(hotelId : string) {
    try {
        await dbConnect();
        const hotel = await hotelModel.findById(hotelId).lean();
        return modifyObjData(hotel)
        
    } catch (err) {
        console.log(err)
    }

    return {};
}