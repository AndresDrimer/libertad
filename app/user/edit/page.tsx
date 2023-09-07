import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'
import  UpdateName  from "@/app/components/UpdateName"


async function EditUser() {
  const session = await getServerSession(authOptions);

  return (
    <div className='text-center'>
        <h1 className='text-4xl'>EditUser</h1>

<div className='border-2 rounded-xl mt-8 max-w-lg mx-auto'>
  <h1 className='text-2xl'>Your Actual User</h1>
  <div className='flex gap-2 justify-center items-center'><p>Name: {session?.user.name}</p><UpdateName /></div>
  <p>Email: {session?.user.email}</p>
  
</div>



    </div>
  )
}

export default EditUser