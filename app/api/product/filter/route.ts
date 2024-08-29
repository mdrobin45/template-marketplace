import Product from "model/product";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";

export async function GET(request: Request) {
   try {
      await dbConnect();
      const url = new URL(request.url);
      const searchParams = new URLSearchParams(url.searchParams);
      const categoryName = searchParams.get("category");

      if (categoryName === "all") {
         const data = await Product.find({});
         return NextResponse.json(data);
      } else {
         const data = await Product.find({ category: categoryName });
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
