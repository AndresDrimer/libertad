import prisma from "@/prisma"
import { NextResponse } from "next/server"



export const PATCH = async (req: Request) => {
    try {
          const { cardId, userId } = await req.json();
  console.log("cardId: ", cardId, "userId", userId)
    

      const card = await prisma.card.findUnique({
        where: {id: cardId},
        include: {owners: true}
      });

    console.log("card", card)

      const previousOwners = card?.owners.map(owner => owner.id) || []
    console.log("prevOwners: ", previousOwners)
if(previousOwners.includes(userId)){
  //aca deberia en realidad borrarla, puede equivocarse al marcarla

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

    const updatedCard = await prisma.card.update({
      where: { id: cardId },
      data: {
        ownersById: {
          set: [...previousOwners, userId],
        },
      },
    });

  console.log("updatedCard: ", updatedCard)

    return NextResponse.json({ message: 'Owner added' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Connection Error' }, { status: 500 });
    }
  
  };