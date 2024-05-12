import { getReviewsForAHotel } from '@/backend/queries/hotels/getRatingReviews';
import Link from 'next/link';
import React from 'react'

interface IProps{
    id: string
}

const HotelReviewNumber : React.FC<IProps> = async ({id}) => {
    const reviews = await getReviewsForAHotel(id);

  return (
    <>
    {
      reviews?.length === 0 ?
        (<Link href="#" className="underline">Be the first one to review</Link>) :
        (<Link href={`/hotel/${id}/reviews`} className="underline">{reviews.length} Reviews</Link>)
    }
    </>
  )
}

export default HotelReviewNumber