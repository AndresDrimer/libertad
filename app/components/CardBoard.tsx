"use client"

import prisma from "@/prisma";
import { Card, User } from "@prisma/client";





function CardBoard({cards, userId}:{cards: Card[], userId: string|undefined}) {
  
  
    const selectCard =  async(cardId: string) => {
        console.log("selected", cardId, "user: ", userId)

       const request = await fetch(`/api/card/${cardId}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
       
       });

      
    };

  return (
    <div><div className="grid grid-cols-4 lg:grid-cols-12 gap-4 mx-auto px-4">
    {cards.map((it: Card) => (
      <button
        key={it.absoluteNum}
        className="border-2 rounded-sm text-center hover:scale-105 text-xl py-2"
        onClick={()=>selectCard(it.absoluteNum.toString())}
      >
        {it.team.substring(0, 2).toUpperCase()}
        {it.teamNum}
        <br />({it.absoluteNum})
      </button>
    ))}
  </div></div>
  )
}

export default CardBoard