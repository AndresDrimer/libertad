"use client"
import { signOut } from 'next-auth/react'

export function SignOutButton()  {
    return(
    <button 
        className='border-2 rounded px-2 py-1 text-xs hover:bg-gray-500'
        onClick={()=>signOut()}>SignOut</button>)
}