import FeaturedProducts from "model/featuredProducts";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";

export async function GET() {
   try {
      await dbConnect();

      const data = await FeaturedProducts.find().populate("template");
      return NextResponse.json(data);
   } catch (err) {
      console.log(err);
      return NextResponse.json({
         message: "Internal Server Error",
      });
   }
}
