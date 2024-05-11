"use client"

import { signOut } from "next-auth/react"



const Logout = () => {

    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/login'})
    }

  return (
    <button
    onClick={
        handleSignOut
    }
    >
        Sign Out
    </button>
  )
}

export default Logout