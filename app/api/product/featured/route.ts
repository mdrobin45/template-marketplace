import FeaturedProducts from "model/featuredProducts";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";

// GET Request
export async function GET() {
   try {
      await dbConnect();

      const data = await FeaturedProducts.find().populate("template");
      return NextResponse.json(data);
   } catch (error) {
      return NextResponse.json(
         {
            message: error.message,
         },
         { status: 500 }
      );
   }
}

// POST Request
export async function POST(request: Request) {
   try {
      await dbConnect();

      const data = await request.json();
      if (data.template) {
         const res = await new FeaturedProducts(data).save();
         return NextResponse.json(
            { id: res._id, message: "Inserted" },
            { status: 200 }
         );
      } else {
         return NextResponse.json(
            { message: "Template id not found" },
            { status: 404 }
         );
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
