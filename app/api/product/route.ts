import Product from "model/product";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";

export async function GET() {
   try {
      await dbConnect();

      const data = await Product.find();
      return NextResponse.json(data);
   } catch {
      return NextResponse.json({ error: "Internal Server Error" });
   }
}
