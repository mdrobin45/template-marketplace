"use server";

import { signIn, signOut } from "auth";
import authConfig from "auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

// Google sign in configuration
export async function googleSignIn(formData: FormData) {
   const provider = formData.get("googleSignInBtn") as string;
   await signIn(provider, { redirectTo: "/" });
}

// Google sign in configuration
export async function githubSignIn(formData: FormData) {
   const provider = formData.get("githubSignInBtn") as string;
   await signIn(provider, { redirectTo: "/" });
}

// Credential sign in
export async function credentialSignIn(formData: {
   email: FormDataEntryValue;
   password: FormDataEntryValue;
}) {
   try {
      const response = await signIn("credentials", {
         ...formData,
         redirect: false,
      });

      return response;
   } catch (error) {
      return new Error("Something went wrong");
   }
}

export async function getAuthState() {
   const session = await auth();
   return session;
}
// Sign Out
export async function logout() {
   await signOut();
}
