import prisma from "@/prisma"
import { NextResponse } from "next/server"
import { authOptions } from "../../auth/[...nextauth]/authOptions"
import { getServerSession } from "next-auth";

export const PATCH = async (request) => {
  

    const body = await request.json()
    const {newName, userId} = body

    
    if(!newName || !userId){
        console.log("new Name incorrect")
        return NextResponse.json({message: "new name incorrect"}, {status: 400})
    }
try{
    const user  = await prisma.user.update({
        where: {id: userId},
        data: {name: newName}
    })
    return NextResponse.json({message: "user name updated OK", user}, {status:201})
} catch(error) {
    return NextResponse.json({message: "could not connect DB"}, {status: 500})
}
}