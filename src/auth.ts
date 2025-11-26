import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"

export const authConfig: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Firebase handles authentication, this is just for NextAuth session
        // You can add additional validation here if needed
        if (credentials?.email && credentials?.password) {
          const email = credentials.email as string
          return {
            id: email,
            name: email.split('@')[0],
            email: email,
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnProtected = nextUrl.pathname.startsWith('/add-product') || 
                            nextUrl.pathname.startsWith('/manage-products')
      
      if (isOnProtected) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      }
      
      return true
    },
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
