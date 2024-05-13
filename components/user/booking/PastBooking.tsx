import { HotelData } from "@/backend/queries/booking/getBooking";
import BookingCard from "./BookingCard";


interface PastBookingProps {
  bookings: HotelData[];
}


const PastBooking : React.FC<PastBookingProps>= ({ bookings }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🕛️ Past Bookings</h2>

      <div className="bg-[#ebf6e9] p-4 rounded-md">
      {bookings &&
                bookings.length > 0 &&
                bookings.map((booking) => (
                    <div
                        key={booking.id}
                        className="bg-[#ebf6e9] p-4 rounded-md"
                    >
                        <BookingCard
                            hotelId={booking.hotelId}
                            checkin={booking.checkin}
                            checkout={booking.checkout}
                        />
                    </div>
                ))}
      </div>
    </div>
  );
};

export default PastBooking;
