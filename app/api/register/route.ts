import prisma from "@/prisma";
import { connectToDb } from "@/prisma/connectDb";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"


  {/*send register form info to db: check existence, hash password and create new user entry, and return user created*/}
export const POST = async(request: Request) => {
    try {
        const body =  await request.json();
        const {name, email, password} = body
        console.log(body)

        if(!name || !email || !password) return NextResponse.json({message: "Invalid data"}, {status: 422});
        
       
        await connectToDb();

        //check if user is previously registered
        const isPreviouslyRegistered = await prisma.user.findUnique({where: {email: email}})
        if(isPreviouslyRegistered) { 
            return NextResponse.json({message: "User already registered"}, {status: 400})}
        
        //hash password before sending it
        const hashedPassword: string = await bcrypt.hash(password, 10)
       
        //create new user with hashed password
        const user = await prisma.user.create({
            data: {
                name, email, password: hashedPassword
            }
        })
        return NextResponse.json({user}, {status: 201})
    } catch (error) {

        return NextResponse.json({message: "unable to register user"}, {status: 500})
    } finally {
        await prisma.$disconnect();
    }
}