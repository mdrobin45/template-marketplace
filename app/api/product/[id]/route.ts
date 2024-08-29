import Product from "model/product";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";

export async function GET(request: Request, { params }) {
   try {
      await dbConnect();

      const { id } = params;
      const data = await Product.findById(id).populate("templateAuthor");
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
