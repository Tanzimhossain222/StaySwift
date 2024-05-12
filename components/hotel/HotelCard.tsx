import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";
import { IHotelInfo } from "@/backend/queries/hotels/getAllHotels";



const HotelCard : React.FC<{hotelInfo: IHotelInfo}> = ({hotelInfo}) => {
  
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={hotelInfo?.thumbNailUrl ?? ""}
        className="max-h-[162px] max-w-[240px]"
        alt={hotelInfo?.name}
        width={240}
        height={162}
      />
      <HotelSummaryInfo fromListPage={true} info ={ hotelInfo } />
    </div>
  );
};

export default HotelCard;
