import prisma from "@/prisma";
import { connectToDb } from "@/prisma/connectDb";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    try {
        const body =  await request.json();
        const {name, email, password} = body
        console.log("body", body)

        if(!name || !email || !password) return NextResponse.json({message: "Invalid data"}, {status: 422});
        
       
        await connectToDb();

        //check if user is previously registered
        const isPreviouslyRegistered = await prisma.user.findUnique({where: {email: email}})
        if(isPreviouslyRegistered) { 
            return NextResponse.json({message: "User already registered"}, {status: 400})}
        
return NextResponse.json({})
}
catch(error){
    console.log(error)
}
}
