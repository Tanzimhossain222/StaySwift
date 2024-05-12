import { IHotelInfo } from "@/backend/queries/hotels/getAllHotels";
import HotelRating from "./HotelRating";
import HotelReviewNumber from "./HotelReviewNumber";
import Link from "next/link";

interface HotelSummaryInfoProps {
  fromListPage: boolean;
  info: IHotelInfo;
}

const HotelSummaryInfo : React.FC<HotelSummaryInfoProps> = ({fromListPage, info}) => {
  
  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2 className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}>Effotel By Sayaji Jaipur</h2>
        <p>📍{info?.city} </p>
        <div className="flex gap-2 items-center my-4">
          <HotelRating id={info?.id} />
          <HotelReviewNumber id={info?.id} />
        </div>
          <div>
            <span className="bg-yellow-300 p-1 rounded-md">
              {info?.propertyCategory} Star Property
            </span>
          </div>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">${ (info?.highRate + info?.lowRate) / 2}/night</h2>
        <p className=" text-right">Per Night for 2 Rooms</p>
        {
          fromListPage ? (<Link href={`/hotels/${info?.id}`} className="btn-primary ">Details</Link>) : (<button className="btn-primary ">Book</button>)
        }
      </div>
    </>
  );
};

export default HotelSummaryInfo;
