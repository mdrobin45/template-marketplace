"use client";
import { useQuery } from "@tanstack/react-query";
import { AppContext } from "context";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUserByEmail } from "utils/api";

export default function ContextProvider({ children }) {
   const [loggedInuser,setLoggedInUser] = useState(null);
   const [templateData, setTemplateData] = useState(null);
   const session = useSession();

   useEffect(()=>{
      if(session?.data){
         const fetchUser = async ()=>{
            const data = await getUserByEmail(session?.data?.user?.email);
            console.log("User data",data);
            setLoggedInUser(data);
         }
         fetchUser();
      }
   },[session.data]);
   // Provide template details
   

   const value = { templateData, setTemplateData,loggedInuser };
   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
