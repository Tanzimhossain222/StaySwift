import { isDatebetween } from "@/app/utils/date-utils";
import { bookingModel } from "@/backend/models/booking-model";

type booking = {
  hotelId: string;
  checkin: string;
  checkout: string;
};

export async function findBooking({
  hotelId,
  checkin,
  checkout,
}: booking): Promise<any> {
  try {
    const matches = await bookingModel
        .find({ hotelId: hotelId.toString() })
        .lean();

    if (matches.length === 0) {
        return null;
    }

    const found = matches.find((match) => {
        return isDatebetween(checkin, match.checkin, match.checkout) ||
            isDatebetween(checkout, match.checkin, match.checkout);
    });
    

    return found;

  } catch (err) {
    throw err;
  }
}
