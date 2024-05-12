"use server"

import { signIn  } from "@/auth"

export async function login(formData : FormData){
    try {

        const res = await signIn("credentials", {
          email: formData.get("email") as string,  
          password: formData.get("password") as string,
          redirect: false
        })

        if (res.error === "CredentialsSignin") {
            // Handle incorrect email or password
            return { error: "Invalid email or password" };
          }


        if (res.error) {
            return { error: res.error as Error };
        } else {
            return { data: res };
        }

        
    } catch (err) {
      throw err;
    }
}