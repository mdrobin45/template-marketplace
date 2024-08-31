"use server";

import { signIn } from "auth";

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
export async function credentialSignIn(formData: FormData) {
   console.log(formData);
}
