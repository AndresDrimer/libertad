import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/prisma";
import { connectToDb } from "@/prisma/connectDb";
import { getServerSession } from "next-auth";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";

export async function PATCH(request:Request, {params}:{params: string}){
    try {
        const cardId= params;
        const body =  await request.json();
        const {userId} = body
        console.log("body", body)
      
        
       
return NextResponse.json({userId, cardId})
}
catch(error){
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
}
}
