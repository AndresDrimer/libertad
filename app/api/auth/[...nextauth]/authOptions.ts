import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import prisma from "@/prisma";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { Card, cardsDb } from "@/db-cards"
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: { label: "name", type: "text", placeholder: "caca" },
        password: { label: "Password", type: "password" },
      },
    
      async authorize(credentials): Promise<User | null>  {
        // Have received email and password?
        if (!credentials?.name || !credentials?.password) {
          return null;
        }

        // User exists in the database?
        const user: User | null = await prisma.user.findFirst({
          where: { name: credentials.name },
        });
        if (!user) {
          return null;
        }

        // Hashed password match?
        const isPasswordMatched = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isPasswordMatched) {
          return null;
        }

        // If every filter is passed ok, then authorize
      
        return {
          ...user,
          cards: [],
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
     // console.log("jwt callback: ", { token, user });

      // Pass extra info to token
      // how to give every user the entire card db for instanciate, with every is selected FALSE, and to keep track of these changes in a new session
      if (user) {
        return {
          ...token,
          id: user.id,
          cards: user.cards,//include cards to token
        };
      }
      return token;
    },
    async session({ session, token }) {
     // console.log("session callback: ", { token, session });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          cards: token.cards,   //include cards to session
        },
      };
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};