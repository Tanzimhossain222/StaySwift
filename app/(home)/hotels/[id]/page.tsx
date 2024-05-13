import Summary from "@/components/hotel/details/Summary";
import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import { getHotelById } from "@/backend/queries/hotels";

export interface IParams {
  params: {
    id: string;
  };
  searchParams: {
    checkin: string;
    checkout: string;
  };
}


const HotelDetailsPage = async ({ params, searchParams } : IParams) => {
  const { id } = params;
  const {checkin, checkout} = searchParams;

  const hotelInfo = await getHotelById({id, checkin, checkout});

  if (!hotelInfo || Object.keys(hotelInfo).length === 0) {
    return <div className="container text-center text-2xl">Hotel not found</div>;
  }
  
  return (
    <>
      <Summary hotelInfo={hotelInfo} checkin={checkin} checkout={checkout} />
      <Gallery gallery={hotelInfo?.gallery} />
      <Overview overview={hotelInfo?.overview} />
    </>
  );
};

export default HotelDetailsPage;
