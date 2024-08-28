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
         return NextResponse.json(data);
      }
   } catch {
      return NextResponse.json({ error: "Internal Server Error" });
   }
}
