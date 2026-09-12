import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { collections, dbConnect } from "./dbConnect";

console.log("NEXTAUTH_SECRET exists:", !!process.env.NEXTAUTH_SECRET);

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        /* 
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }, */
      },
      async authorize(credentials, req) {
        const user = await loginUser(credentials);
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(user, account, profile, email, credentials);

      const isExist = await dbConnect(collections.USERS).findOne({
        email: user.email,
        provider: account?.provider,
      });
      if (isExist) {
        return true;
      }

      // return true;

      const newUser = {
        provider: "credentials",
        name: user.name,
        email: user.email,
        image: user.image,
        role: "user",
      };

      const result = await dbConnect(collections.USERS).insertOne(newUser);
      return result.acknowledged;

      // return true;
    },
    // async redirect({url, baseUrl}){
    //   return baseUrl;
    // },
    // async session({session, token, user}){
    //   return session;
    // },
    // async jwt({token, user, account, profile, isNewUser}){
    //   return token;
    // },
  },
};

