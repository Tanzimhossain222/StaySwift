import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = () => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src="./assets/images/image-1.png"
        className="max-h-[162px] max-w-[240px]"
        alt=""
        width={240}
        height={162}
      />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;
