"use server"

import { revalidatePath } from "next/cache";




export const selectCard = async (cardId: string, userId:string) => { 

  try {
    const res = await fetch(`http://localhost:3000/api/user/cards`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({cardId, userId})
    });
   
   revalidatePath("/dashboard")
  } catch (error) {
    console.log("Error: ", error)
  }
    
   };