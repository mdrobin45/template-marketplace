"use client";
import { getAuthState } from "actions";
import { AppContext } from "context";
import { useEffect, useState } from "react";

export default function ContextProvider({ children }) {
   const [isLoading, setIsLoading] = useState(true);
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   useEffect(() => {
      const authState = async () => {
         const authState = await getAuthState();
         setIsAuthenticated(authState);
         setIsLoading(false);
      };
      authState();
   }, []);

   const providerValue = {
      isLoading,
      isAuthenticated,
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
