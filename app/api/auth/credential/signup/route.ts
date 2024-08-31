import { NextResponse } from "next/server";
import dbConnect from "utils/db";

// POST Request
export async function POST(request: Request) {
   try {
      await dbConnect();

      const data = await request.json();
      console.log(data);
      return NextResponse.json({ message: "Hello" });
   } catch (error) {
      return NextResponse.json(
         {
            message: error.message,
         },
         { status: 500 }
      );
   }
}
