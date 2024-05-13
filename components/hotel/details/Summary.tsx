import { IHotelInfo } from "@/backend/queries/hotels/getAllHotels";
import HotelSummaryInfo from "../HotelSummaryInfo";

interface IProps {
  hotelInfo: IHotelInfo,
  checkout: string,
  checkin: string
}

const Summary : React.FC<IProps> = ({ hotelInfo , checkout, checkin }) => {

  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        
         <HotelSummaryInfo fromListPage={false} info={hotelInfo} checkin={checkin} checkout={checkout} />
      </div>
    </section>
  );
};

export default Summary;

