"use server";

import { signIn } from "auth";
import { cookies } from "next/headers";
import { credUserRegister } from "utils/api";

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
   const credentials = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
   };
   const res = await credUserRegister(credentials);

   // Set jwt token in cookie
   cookies().set("token", res?.token, { httpOnly: true });
}
