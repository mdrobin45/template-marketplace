"use client";
import { AppContext } from "context";
import { useState } from "react";

export default function ContextProvider({ children }) {
   // Provide template details
   const [templateData, setTemplateData] = useState(null);

   const value = { templateData, setTemplateData };
   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
