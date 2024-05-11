import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { auth, signIn, signOut, handlers:{ GET, POST }} = NextAuth({

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ]

})

