import prisma from "@/prisma"
import { NextResponse } from "next/server"



export const PATCH = async (req: Request) => {
    try {
          const { cardId, userId } = await req.json();
  
    
      //find card by Id
      const card = await prisma.card.findUnique({
        where: {id: cardId},
        include: {owners: true}
      });

   

      const previousOwners = card?.owners.map(owner => owner.id) || []
    
//to unmark
if(previousOwners.includes(userId)){
  const removeFromPreviousOwners = previousOwners.filter(it=> it!==userId)
  
  const unOwnCard = await prisma.card.update({
    where: {id: cardId},
    data: {
      ownersById: {
        set: [...removeFromPreviousOwners]
      }
    }
  })
  return NextResponse.json({message: "Owner removed"}, {status: 201})
}
    //to mark
    const updatedCard = await prisma.card.update({
      where: { id: cardId },
      data: {
        ownersById: {
          set: [...previousOwners, userId],
        },
      },
    });

 

    return NextResponse.json({ message: 'Owner added' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Connection Error' }, { status: 500 });
    }
  
  };