import Product from "model/product";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";

export async function GET(request: Request, { params }) {
   try {
      await dbConnect();

      const { slug } = params;
      const data = await Product.findOne({ slug }).populate({
         path: "author",
         select: "name username avatar",
      });
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
