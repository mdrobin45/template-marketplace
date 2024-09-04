import bcrypt from "bcrypt";
import User from "model/user";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "utils/db";

// Authorize user
const authorizeUser = async (credentials: {
   email: string;
   password: string;
}) => {
   await dbConnect();
   // Check if user already registered or not
   const user = await User.findOne({ email: credentials.email });
   if (user) {
      const userGivenPwd = credentials.password;
      const userEncryptedPwd = user?.password;

      // Compare both password
      const isMatched = await bcrypt.compare(userGivenPwd, userEncryptedPwd);

      if (!isMatched) {
         throw new Error("Incorrect email or password!");
      }

      console.log(user);
      return user;
   } else {
      throw new Error("User not found!");
   }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
   session: {
      strategy: "jwt",
   },
   providers: [
      Credentials({
         credentials: {
            email: {},
            password: {},
         },
         authorize: authorizeUser,
      }),
      GoogleProvider,
      GithubProvider,
   ],
});
