import Product from "model/product";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";

export async function GET(request: Request, { params }) {
   try {
      await dbConnect();

      const { category } = params;

      if (category === "all") {
         const data = await Product.find({});
         return NextResponse.json(data);
      } else {
         const data = await Product.find({ category: category });
         return NextResponse.json(data, { status: 200 });
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
