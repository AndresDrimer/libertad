import { campeones } from '@/dbInternal'
import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'

const Campeones = () => {
  return (
    <div className=''>
     <div className="w-full flex flex-col justify-center items-center mb-8">
     
        <h1 className="text-md mt-4 text-[#f2c464] text-xl md:text-5xl text-normal">
          - CAMPEONES -
        </h1>

        <p className="bolder hover:scale-110 text-2xl md:text-5xl">
          LIBERTADORES
        </p>

      </div>
    
    <div className='w-full grid grid-cols-1 gap-8  mx-auto'>
{campeones.map(it=>(
    <div className='flex'>
        <Image 
        src={it.path}
        alt="escudo"
        width={60}
        height={60}
        style={{ width: 'auto', height: 'auto' }}
        className='ml-2'
        />

<div className='ml-8 flex flex-col items-start justify-center'>
    <h3 className="text-2xl break-words">{it.year}<br/>{it.team}</h3>
</div>
    </div>
))}


    </div>
<Footer />
    </div>
  )
}

export default Campeones