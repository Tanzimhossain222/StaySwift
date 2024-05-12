import { IHotelInfo } from "@/backend/queries/hotels/getAllHotels";
import HotelSummaryInfo from "../HotelSummaryInfo";

interface IProps {
  hotelInfo: IHotelInfo
}

const Summary : React.FC<IProps> = ({ hotelInfo }) => {

  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        
         <HotelSummaryInfo fromListPage={false} info={hotelInfo} checkin="" checkout="" />
      </div>
    </section>
  );
};

export default Summary;

