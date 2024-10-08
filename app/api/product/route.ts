import Product from "model/product";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";

export async function GET() {
   try {
      await dbConnect();

      const data = await Product.find();
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

// POST Request
export async function POST(request: Request) {
   try {
      await dbConnect();

      const data = await request.json();

      const res = await new Product(data).save();
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
