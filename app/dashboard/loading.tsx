import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-white p-8 mt-2'>
        <h1 className='text-2xl'>Loading...</h1>
        <div className='relative mt-8'>
        <Image 
        src={"/211.gif"}
        alt= "loading gif"
   width={100}
   height={100}
        /></div>
    </div>
  )
}

export default loading