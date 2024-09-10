"use client";
import authConfig from "auth.config";
import { AppContext } from "context";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);
export default function ContextProvider({ children }) {
   const session = auth();
   const isAuthenticated = session?.user ? true : false;

   const providerValue = {
      isAuthenticated,
   };

   return (
      <AppContext.Provider value={providerValue}>
         {children}
      </AppContext.Provider>
   );
}
