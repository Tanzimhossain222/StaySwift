import { getAllHotels } from "@/backend/queries";
import HotelCard from "./HotelCard";

const HotelList =async () => {
const hotels = await getAllHotels();

 
  return (
    <div className="col-span-9">
      <div className="space-y-4">
       <HotelCard />
      </div>
    </div>
  );
};

export default HotelList;
