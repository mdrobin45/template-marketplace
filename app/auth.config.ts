import { NextAuthConfig } from "next-auth";

export default function authConfig(): NextAuthConfig {
   return {
      session: {
         strategy: "jwt",
      },
      providers: [],
   };
}
