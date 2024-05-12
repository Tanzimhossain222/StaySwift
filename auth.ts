import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/db";
import { loginController } from "./backend/controllers/auth/loginController";


type AuthorizeResponse = { 
    id: string; 
    name: string; 
    email: string; 
    image?: string | null; 
  } | null;

export const { auth, signIn, signOut, handlers:{ GET, POST }} = NextAuth({
adapter: MongoDBAdapter(clientPromise),
session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
},
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        CredentialProvider({
            credentials:{
                email: {},
                password: {}
            },

            async authorize(credentials): Promise<AuthorizeResponse> {
                if (credentials == null) {
                    return null;
                }

                try {
                    const user = await loginController({
                        email: credentials.email as string,
                        password: credentials.password as string
                    });

                    

                    return user as AuthorizeResponse; 

                } catch (err) {
                    return null; 
                }
            }
        })
    ]

})

