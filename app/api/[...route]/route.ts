// app/api/[...route]/route.ts

import { NextResponse } from "next/server";

export async function GET() {
   return NextResponse.json(
      { message: "API route not found" },
      { status: 404 }
   );
}

export async function POST() {
   return NextResponse.json(
      { message: "API route not found" },
      { status: 404 }
   );
}

export async function PUT() {
   return NextResponse.json(
      { message: "API route not found" },
      { status: 404 }
   );
}

export async function DELETE() {
   return NextResponse.json(
      { message: "API route not found" },
      { status: 404 }
   );
}
