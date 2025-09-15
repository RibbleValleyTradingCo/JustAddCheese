import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/db/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";

export const config = {
    pages: {
        signIn: "/sign-in", // Displays signin buttons
        error: "/sign-in", // Error code passed in query string as ?error=
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (credentials == null) return null;

            // Find uder in databse
            const user = await prisma.user.findFirst({ 
                where: { 
                    email: credentials.email as string 
                }
            });

            // Check if user exists and password matches
            if (user && user.password) {
                const isMatch = compareSync(credentials.password as string, user.password);
            // Optionally, add password check here
                if (isMatch) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    };
                }
            }
            //If user not found or password does not match
            return null;
        },
    }),
    ],
    callbacks: {
        async session({ session, user, trigger, token }: any) {
            //Set user role and id to session
            session.user.id = token.sub;

            //If there is an update, set the user name
            if (trigger === "update") {
                session.user.name = user.name;
            }
            return session;
        },
    },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);