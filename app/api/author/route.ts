import Author from "model/user";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";
import hashPassword from "utils/encrypt-password";
import generateToken from "utils/generateToken";

export async function GET() {
   return NextResponse.json(
      { message: "API route not found" },
      { status: 404 }
   );
}

// Register author
export async function POST(request: Request) {
   try {
      await dbConnect();

      // Parse body data
      const data = await request.json();

      // Password encryption and save to DB
      const encryptedPwd = await hashPassword(data?.password);
      const res = await new Author({ ...data, password: encryptedPwd }).save();

      // Jwt token generation
      if (res) {
         const { name, email, role } = res;
         const token = await generateToken({ name, email, role });

         return NextResponse.json(
            { token: token, message: "Registration successful" },
            { status: 200 }
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
