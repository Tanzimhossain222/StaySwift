import { getRatingsForAHotel } from "@/backend/queries/hotels/getRatingReviews"

type HotelRatingProps = {
    id: string
}


const getRatingDescription = (avgRating : number ) => {
    if (avgRating === 0) {
        return "No Ratings Available";
      } else if (avgRating > 0 && avgRating <= 2) {
        return "Poor";
      } else if (avgRating > 2 && avgRating <= 3) {
        return "Average";
      } else if (avgRating > 3 && avgRating <= 4) {
        return "Good";
      } else if (avgRating > 4) {
        return "Very Good";
      }
}

const HotelRating : React.FC<HotelRatingProps> = async({id}) => {
    const ratings = await getRatingsForAHotel(id);

    let avgRating = 0;

    if(ratings.length === 1){
       avgRating = ratings[0].rating;
    } 
    else if(ratings.length > 1){
        avgRating = ratings.reduce((acc, rating) => acc + rating.rating, 0) / ratings.length;
    } 

  return (
  <>
      <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
        {avgRating}
      </div>
      <span className="font-medium">{getRatingDescription(avgRating)}</span>
    </>
  )
}

export default HotelRating