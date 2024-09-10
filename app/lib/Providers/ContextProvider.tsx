"use client";
import { getAuthState } from "actions";
import { AppContext } from "context";
import { useEffect, useState } from "react";

export default function ContextProvider({ children }) {
   const [isLoading, setIsLoading] = useState(true);
   const [authSession, setAuthSession] = useState(null);
   useEffect(() => {
      const authState = async () => {
         const userSession = await getAuthState();
         setAuthSession(userSession);
         setIsLoading(false);
      };
      authState();
   }, []);

   const providerValue = {
      isLoading,
      authSession,
   };

   if (isLoading) {
      return null; // Render loading state while waiting for authentication data
   }

   return (
      <AppContext.Provider value={providerValue}>
         {children}
      </AppContext.Provider>
   );
}
