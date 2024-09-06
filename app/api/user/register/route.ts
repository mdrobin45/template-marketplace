import User from "model/user";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";
import hashPassword from "utils/encrypt-password";

// Register user
export async function POST(request: Request) {
   try {
      await dbConnect();

      // Parse body data
      const data = await request.json();

      // Check if user already registered or not
      const findUser = await User.findOne({ email: data?.email });

      if (!findUser) {
         // Password encryption and save to DB
         const encryptedPwd = await hashPassword(data?.password);
         await new User({ ...data, password: encryptedPwd }).save();

         return NextResponse.json(
            { message: "Registration successful" },
            { status: 201 }
         );
      }
      return NextResponse.json(
         { message: "This user already registered!" },
         { status: 409 }
      );
   } catch (error) {
      return NextResponse.json(
         {
            message: error.message,
         },
         { status: 500 }
      );
   }
}
