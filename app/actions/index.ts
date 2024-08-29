"use server";

import { signIn } from "auth";

// Google sign in configuration
export async function googleSignIn(formData: FormData) {
   const provider = formData.get("googleSignInBtn") as string;
   await signIn(provider);
}
