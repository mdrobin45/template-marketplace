import User from "model/user";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "utils/db";

export async function GET(request: NextRequest,{params}) {
   try {
      dbConnect();
      const {email} = params;
      if (!email) {
         return NextResponse.json({ message: "Email is required" }, { status: 400 });
      }
      const user = await User.findOne({ email });
      if (!user) {
         return NextResponse.json({ message: "User not found" }, { status: 404 });
      }
      return NextResponse.json(user, { status: 200 });
   } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
   }
}
