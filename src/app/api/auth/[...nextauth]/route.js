import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const nextConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        //authorize user logic !!!

        if (credentials) {
          const user = { name: "Some name", email: credentials.email };
          return user;
        }

        //authorize user logic !!!
      },
    }),
    ],
    pages: {
        //provide custom SignIn, SignOut, ... pages 
    }
};

const handler = NextAuth(nextConfig);

export { handler as GET, handler as POST };
