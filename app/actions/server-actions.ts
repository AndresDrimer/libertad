"use server"

import { revalidateTag } from "next/cache";




export const selectCard = async (cardId: string, userId:string) => { 
    const res = await fetch(`http://localhost:3000/api/user/cards`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({cardId, userId})
    });
   
   revalidateTag("cardsComplete")
   };