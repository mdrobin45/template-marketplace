"use server";

import { signIn, signOut } from "auth";

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
      await signIn("credentials", {
         ...formData,
         redirect: false,
      });
   } catch (error) {
      throw error;
   } finally {
      return true;
   }
}
// Sign Out
export async function logout() {
   await signOut();
}
