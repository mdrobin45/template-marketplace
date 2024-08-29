import Author from "model/author";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";

export async function GET() {
   return NextResponse.json(
      { message: "API route not found" },
      { status: 404 }
   );
}

// Insert author
export async function POST(request: Request) {
   try {
      await dbConnect();

      const data = await request.json();

      const res = await new Author(data).save();
      return NextResponse.json(
         { id: res._id, message: "Inserted" },
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
