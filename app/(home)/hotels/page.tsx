import Search from "@/components/search/Search";
import Filter from "@/components/search/Filter";
import HotelList from "@/components/hotel/HotelList";

interface HotelListPageProps {
  searchParams: {
    destination: string;
    checkin: string;
    checkout: string;
  };
}

const HotelListPage = ({
  searchParams: { destination, checkin, checkout },
}: HotelListPageProps) => {
  return (
    <>
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div className="container items-center py-12 ">
          <Search
            fromList={true}
            checkin={checkin}
            checkout={checkout}
            destination={destination}
          />
        </div>
      </section>
      <section className="py-12">
        <div className="container grid grid-cols-12">
          <Filter />
          <HotelList 
           checkin={checkin}
           checkout={checkout}
           destination={destination}
          />
        </div>
      </section>
    </>
  );
};

export default HotelListPage;
