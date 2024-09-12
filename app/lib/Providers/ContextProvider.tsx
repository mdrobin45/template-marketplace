"use client";
import { AppContext } from "context";

export default function ContextProvider({ children }) {
   return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
