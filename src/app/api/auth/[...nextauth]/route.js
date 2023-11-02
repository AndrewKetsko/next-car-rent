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

        const res = await fetch(
          "https://next-car-rent.vercel.app/api/users/login",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            "content-type": "application/json",
          }
        );

        if (!res.ok) return null;

        const user = res.json();
        return user;
      },
    }),
  ],
  pages: {
    //provide custom SignIn, SignOut, ... pages
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "credentials") return true;
      const res = await fetch(
        "https://next-car-rent.vercel.app/api/users/register",
        {
          method: "POST",
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            avatar: user.image || "",
            password: profile.sub || "qwerty",
          }),
          "content-type": "application/json",
        }
      );
      return true;
    },
  },
};

const handler = NextAuth(nextConfig);

export { handler as GET, handler as POST };
