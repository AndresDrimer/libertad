"use client"
import { Card } from '@prisma/client'
import { useSession } from 'next-auth/react'


function EachCard({it}: {it: Card}) {
    const {data: session} = useSession();
    const userId: string | undefined = session?.user.id



    const selectCard = async (cardId: string) => { 
      



      const res = await fetch(`/api/user/cards`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({cardId, userId})
      })

     }

    
  return (
    <button
    key={it.absoluteNum}
    className={`border-2 rounded-sm text-center hover:scale-105 text-xl py-2  ${it.isSelected ? "bg-green-500" : "bg-gray-900"}`}
    onClick={()=>selectCard(it.id)}
  ><p className='text-3xl'>{it.absoluteNum}</p>
   <p className='text-sm'>({it.team.substring(0, 3).toUpperCase()} - {it.teamNum})</p> 
    
  </button>
  )
}

export default EachCard