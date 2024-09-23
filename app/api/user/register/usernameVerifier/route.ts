import User from "model/user";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "utils/db";

export async function POST(request:NextRequest){
try {
    dbConnect();
    const data = await request.json();
    const findUser = await User.findOne({username:data?.username});
    if(findUser){
        return NextResponse.json({message:"Username already taken"},{status:409})
    }
    return NextResponse.json({message:"Username is available"},{status:200})
} catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
   }
}
