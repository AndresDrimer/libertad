import React from 'react'
import { SignOutButton } from './SignOutButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/authOptions'
import Link from "next/link"
import { redirect } from 'next/navigation'

async function Navbar() {
    const session = await getServerSession(authOptions);
if(!session) {redirect("/")}

  return (
    <nav className='flex'><p className='mr-auto'>Hola {session?.user?.name}</p><SignOutButton /></nav>
  )
}

export default Navbar