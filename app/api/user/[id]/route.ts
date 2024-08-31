import Author from "model/user";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";

// Get author by id
export async function GET(request: Request, { params }) {
   try {
      await dbConnect();

      const { id } = params;
      const data = await Author.findById(id).populate("templates");
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
