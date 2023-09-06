import prisma from "@/prisma"
import { NextResponse } from "next/server"



export const PATCH = async (req: Request) => {
    try {
          const { cardId, userId } = await req.json();
  console.log("cardId: ", cardId, "userId", userId)
    


    const updatedCard = await prisma.card.update({
      where: { id: cardId },
      data: {
        owners: {
          connect:userId.map((id: string) => ({ id })),
        },
      },
    });
  console.log("updatedCard: ", updatedCard)
    return NextResponse.json({ message: 'OK' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
  
  };