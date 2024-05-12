"use server"

import { signIn  } from "@/auth"

export async function login(formData : FormData){
    try {

        const res = await signIn("credentials", {
          email: formData.get("email") as string,  
          password: formData.get("password") as string,
          redirect: false
        })
      
        if (res){  
          return {
            user: res
          }
        } else {
          return {
            error: "Invalid credentials"
          }
        }

    } catch (err) {
      return {
        error: (err as Error).message
      }
    }
}