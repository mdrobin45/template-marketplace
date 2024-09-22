import User from "model/user";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";

// Get author by id
export async function GET(request: Request, { params }) {
   try {
      await dbConnect();

      const { username } = params;
      const data = await User.findOne({ username }).populate("templates");
      return NextResponse.json(data, { status: 200 });
   } catch (error) {
      return NextResponse.json(
         {
            message: error.message,
         },
         { status: 500 }
      );
   }
}
