"use client";

import { IUser } from "@/backend/queries/auth/login";
import { useRouter } from "next/navigation";
import { useState } from "react";

type PaymentFormProps = {
  checkin: string;
  checkout: string;
  loggedInUser: IUser;
  hotelId: string;
  cost: number;
};

const PaymentForm: React.FC<PaymentFormProps> = ({
  checkin,
  checkout,
  loggedInUser,
  hotelId,
  cost,
}) => {

  const [errorrr, setError] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // hotelId, userId, checkin, checkout
    const formData = new FormData(e.currentTarget);
    const checkin = formData.get("checkin") as string;  
    const checkout = formData.get("checkout") as string;
    const userId = loggedInUser?.id;

    try {

      const res = await fetch("/api/auth/payment",{
        method: "POST",
        body: JSON.stringify({hotelId, userId, checkin, checkout}),
        headers: {
          "Content-Type": "application/json"
        }
      })

      if (res.status === 201) {
        router.push("/bookings")
      } else {
        throw new Error("Booking failed")
      }
    } catch (err) {
      setError((err as Error).message)
    }
    
  }


  return (
    <>
    {errorrr && <div className="text-red-500">{errorrr}</div>}
    <form className="my-8" onSubmit={handleSubmit}>
      <div className="my-4 space-y-2">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          defaultValue={loggedInUser?.name}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          defaultValue={loggedInUser?.email}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <span>Check in</span>
        <h4 className="mt-2">
          <input type="date" name="checkin" defaultValue={checkin} id="checkin" />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <span>Checkout</span>
        <h4 className="mt-2">
          <input type="date" name="checkout" defaultValue={checkout} id="checkout" />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="card" className="block">
          Card Number
        </label>
        <input
          type="text"
          id="card"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="expiry" className="block">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiry"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="cvv" className="block">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Pay Now (${cost})
      </button>
    </form>
    </>
  );
};

export default PaymentForm;
