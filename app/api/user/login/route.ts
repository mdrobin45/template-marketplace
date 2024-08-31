import bcrypt from "bcrypt";
import User from "model/user";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";
import generateToken from "utils/generateToken";

// Register user
export async function POST(request: Request) {
   try {
      await dbConnect();

      // Parse body data
      const data = await request.json();

      // Check if user already registered or not
      const findUser = await User.findOne({ email: data?.email });
      if (findUser) {
         const userGivenPwd = data?.password;
         const userEncryptedPwd = findUser?.password;

         // Compare both password
         const isMatched = await bcrypt.compare(userGivenPwd, userEncryptedPwd);

         if (!isMatched) {
            return NextResponse.json(
               {
                  message: "Incorrect email or password",
               },
               { status: 401 }
            );
         }

         // Send access token
         const { name, email, role } = findUser;
         const token = await generateToken({ name, email, role });

         return NextResponse.json(
            { token: token, message: "Login successful" },
            { status: 201 }
         );
      } else {
         return NextResponse.json(
            {
               message: "Incorrect email or password",
            },
            { status: 401 }
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
