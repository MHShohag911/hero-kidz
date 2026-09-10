import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {/* 
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }, */
      },
      async authorize(credentials, req) {
        const user = await loginUser(credentials);
        return user;
      },
    }),
  ],
};
