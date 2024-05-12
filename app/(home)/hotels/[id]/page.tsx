import Summary from "@/components/hotel/details/Summary"
import Gallery from "@/components/hotel/details/Gallery"
import Overview from "@/components/hotel/details/Overview"
import { getHotelById } from "@/backend/queries/hotels"
import { IHotelInfo } from "@/backend/queries/hotels/getAllHotels";

interface IParams {
  id: string;
}


export interface IInfo extends IHotelInfo {
  gallery: string[];
  overview: string;
}



const HotelDetailsPage = async ({ params }: { params: IParams }) => {
  const { id } = params;
  const hotelInfo : IInfo  = await getHotelById(id);

  return (
    <>
        <Summary hotelInfo={hotelInfo} />
        <Gallery gallery={hotelInfo?.gallery} />
        <Overview overview={hotelInfo?.overview}  />
    </>
  )
}

export default HotelDetailsPage