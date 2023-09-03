import prisma from "@/prisma/index"

export const connectToDb = async () => {
    try {
        await prisma.$connect();
    } catch (error) {
        console.log(error)
        throw new Error("could not connect to prisma")
    }
}