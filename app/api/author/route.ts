import Author from "model/user";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";
import hashPassword from "utils/encrypt-password";

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

      const data = await request.json();

      const encryptedPwd = await hashPassword(data?.password);

      const res = await new Author({ ...data, password: encryptedPwd }).save();
      return NextResponse.json(
         { id: res._id, message: "Registration successful" },
         { status: 200 }
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
