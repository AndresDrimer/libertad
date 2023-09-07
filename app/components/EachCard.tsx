"use client"
import { Card } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';


function EachCard({it}: {it: Card}) {
    const router = useRouter();
    const {data: session} = useSession();
    const userId: string  = session?.user.id ?? ""


//Now it is working but it´s a littel annoying to have to wait to refresh page to change color, maybe it can be achived other way... useEffect??


    const selectCard = async (cardId: string) => { 
      const res = await fetch(`/api/user/cards`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({cardId, userId})
      });
     // router.push("/dashboard") don´t know why this doesn´t work as it should be
     window.location.href = "/dashboard"
     };

    const owned = it.ownersById.includes(userId)
console.log("owned", owned)
  return (
    <button
    key={it.absoluteNum}
    className={`border-2 rounded-sm text-center hover:scale-105 text-xl py-2 ${owned ? "bg-emerald-500" : "bg-sky-950"}`}
    onClick={()=>selectCard(it.id)}
  ><p className='text-3xl'>{it.absoluteNum}</p>
   <p className='text-sm'>({it.team.substring(0, 3).toUpperCase()} - {it.teamNum})</p> 
    
  </button>
  )
}

export default EachCard