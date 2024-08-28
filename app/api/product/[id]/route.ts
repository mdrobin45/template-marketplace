import Product from "model/product";
import { NextResponse } from "next/server";
import dbConnect from "utils/db";

export async function GET(request: Request, { params }) {
   try {
      await dbConnect();

      const { id } = params;
      const data = await Product.findById(id).populate("templateAuthor");
      return NextResponse.json(data);
   } catch {
      return NextResponse.json({ error: "Internal Server Error" });
   }
}
