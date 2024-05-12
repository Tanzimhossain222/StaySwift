"use client"

import { login } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {

const [error , setError] = useState<string | null>(null)
const router= useRouter();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = new FormData(e.currentTarget);

    try {
      const response = await login(formData);
        console.log(response);
        
        if (!!response.error) {
          typeof response.error === "string" ? setError(response.error) : setError("An error occurred. Please try again.");
      } else {
        router.push("/bookings");
      }

    } catch (err) {
      setError("An error occurred. Please try again.");
    }
}

  return (
    <>
    {error && <p className="text-red-500 text-center">{error}</p>}

    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="submit" className="btn-primary w-full mt-4">
        Login
      </button>
    </form>
    </>
  );
};

export default LoginForm;
