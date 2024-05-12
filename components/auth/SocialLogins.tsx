"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type SocialLoginsProps = {
  mode: "login" | "register";
}

type socialMode = 'gitHub' | 'google';

const SocialLogins = ({ mode }: SocialLoginsProps) => {

  const handleAuth = (social : socialMode) => {

    switch (social ) {
      case 'gitHub':
        signIn("github", {
          callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/bookings`,
        });
        break;
      case 'google':
        signIn("google", {
          callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/bookings`,
        });
        break;
      default:
        break;
    }
    
  };

  return (
    <>
      <div className="text-center text-xs text-gray-500">
        {mode === "register" ? (
          <Link className="underline" href="/login">
            Login
          </Link>
        ) : (
          <Link className="underline" href="/register">
            Register
          </Link>
        )}{" "}
        or Signup with
      </div>
      <div className="flex gap-4">
        <button  onClick={()=>handleAuth('gitHub')} className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
          <Image src="/github.png" alt="github" width={40} height={40} />
          <span>GitHub</span>
        </button>
        <button
          onClick={()=>handleAuth('google')}
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
        >
          <Image src="/google.png" alt="google" width={40} height={40} />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
