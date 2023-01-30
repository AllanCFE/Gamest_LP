import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"

export default NextAuth({
providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }),
],
adapter: FirestoreAdapter({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: "gamest-br.appspot.com",
    messagingSenderId: "121601058091",
    appId: "1:121601058091:web:47442b26c162b7f7c2916e",
    measurementId: "G-L4DVNT9XFT"
}),
  // ...
});