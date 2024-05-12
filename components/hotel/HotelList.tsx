import { getAllHotels } from "@/backend/queries/hotels";
import HotelCard from "./HotelCard";

interface HotelListProps {
  destination: string;
  checkin: string;
  checkout: string;
}

const HotelList : React.FC<HotelListProps> =async ( { destination, checkin, checkout } ) => {
  const allHotels = await getAllHotels({ destination, checkin, checkout } );

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
       allHotels.length > 0 &&   allHotels.map(( hotel ) => (
            <HotelCard key={hotel.id} hotelInfo={hotel} checkin={checkin} checkout={checkout} />
          ))
        }
       
      </div>
    </div>
  );
};

export default HotelList;
