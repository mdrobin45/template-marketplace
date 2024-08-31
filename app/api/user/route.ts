import User from "model/user";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";
import hashPassword from "utils/encrypt-password";
import generateToken from "utils/generateToken";

// Register user
export async function POST(request: Request) {
   try {
      await dbConnect();

      // Parse body data
      const data = await request.json();

      // Check if user already registered or not
      const findUser = await User.find({ email: data?.email });
      if (findUser) {
         return NextResponse.json(
            { message: "This user already registered!" },
            { status: 409 }
         );
      }

      // Password encryption and save to DB
      const encryptedPwd = await hashPassword(data?.password);
      const res = await new User({ ...data, password: encryptedPwd }).save();

      // Jwt token generation
      if (res) {
         const { name, email, role } = res;
         const token = await generateToken({ name, email, role });

         return NextResponse.json(
            { token: token, message: "Registration successful" },
            { status: 201 }
         );
      }
   } catch (error) {
      return NextResponse.json(
         {
            message: error.message,
         },
         { status: 500 }
      );
   }
}
