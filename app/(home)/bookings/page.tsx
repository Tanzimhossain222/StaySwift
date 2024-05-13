import { auth } from "@/auth";
import { getUser } from "@/backend/queries/auth";
import { getBookingbyUser } from "@/backend/queries/booking/getBooking";
import ProfileInfo from "@/components/user/ProfileInfo";
import PastBooking from "@/components/user/booking/PastBooking";
import UpcomingBooking from "@/components/user/booking/UpcomingBooking";
import { redirect } from "next/navigation";

const BookingsPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const loggedInUser = await getUser(session.user?.email ?? '');
  const bookings = await getBookingbyUser(loggedInUser?.id);

  

  const pastBooking = bookings.filter((booking) => {
    return new Date(booking.checkin) < new Date();
  } );

    const upcomingBooking = bookings.filter((booking) => {
        return new Date(booking.checkin) > new Date();
    } );


  return (
    <>
      <section className="mt-[100px]">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBooking bookings={pastBooking} />
            <UpcomingBooking bookings={upcomingBooking} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingsPage;
