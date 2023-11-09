"use client"
import { CardComplete, CardWithTeam } from '@/types';
import { Card } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';



function EachCard({it}: {it: CardComplete}) {
    const router = useRouter();
       
    const {data: session} = useSession();
    const userId: string  = session?.user.id ?? ""


//Now it is working but it´s a littel annoying to have to wait to refresh page to actualice cards owned


    const selectCard = async (cardId: string) => { 
      const res = await fetch(`/api/user/cards`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({cardId, userId})
      }); 


      //don´t know why this doesn´t work as it should be: revalidatePath("/dashboard")
    //so, in the meanwhile...
     window.location.href = "/dashboard"
  
     };

    const owned = it.ownersById.includes(userId)

  return (
    <button
    key={it.absoluteNum}
    className={`border-2 rounded-sm text-center hover:scale-110 text-xl px-1 py-2   ${owned ? "bg-gradient-to-l from-emerald-500 to-emerald-600 border-green-800 rounded-lg hover:tracking-widest active:grayscale" : "bg-sky-950"}`}
    onClick={()=>selectCard(it.id)}
  >
   
   { it.team?.teamName !=="CL" ? (<div><p className='text-2xl'>{it.teamNum}</p>
   <p className='text-xs break-all'>{it.team?.teamName.toUpperCase()}</p></div>) : (<div><p className='text-2xl'>{it.team?.teamName} {it.teamNum}</p>
   </div>)} 
    

  </button>
  )
}

export default EachCard