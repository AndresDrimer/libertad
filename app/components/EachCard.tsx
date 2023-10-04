"use client"
import { selectCard } from '@/actions/selectCard';
import { CardComplete, CardWithTeam } from '@/types';
import { Card } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { revalidatePath, revalidateTag } from 'next/cache';
import { useRouter } from 'next/navigation';



function EachCard({it}: {it: CardComplete}) {
    const router = useRouter();
       
    const {data: session} = useSession();
    const userId: string  = session?.user.id ?? ""

  

    const owned = it.ownersById.includes(userId)

  return (
    <button
    key={it.absoluteNum}
    className={`border-2 rounded-sm text-center hover:scale-110 text-xl px-1 py-2   ${owned ? "bg-gradient-to-l from-emerald-500 to-emerald-600 border-green-800 rounded-lg hover:tracking-widest active:grayscale" : "bg-sky-950"}`}
    onClick={()=>selectCard(it.id, userId)}
  >
   
   { it.team?.teamName !=="CL" ? (<div><p className='text-2xl'>{it.teamNum}</p>
   <p className='text-xs break-all'>{it.team?.teamName.toUpperCase()}</p></div>) : (<div><p className='text-2xl'>{it.team?.teamName} {it.teamNum}</p>
   </div>)} 
    

  </button>
  )
}

export default EachCard