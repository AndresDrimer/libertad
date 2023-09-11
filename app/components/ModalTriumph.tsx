import React, { Dispatch, SetStateAction } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


function ModalTriumph({userName, setTeamCompleted}: {userName: string, setTeamCompleted:Dispatch<SetStateAction<boolean>>}) {
    const { width, height } = useWindowSize()
  return (
    <div>
    <Confetti
    width={width}
    height={height}
    numberOfPieces={100}
    className='w-full'
  />
    <div className='absolute w-3/4 md:w-1/2 h-[200px]  bg-emerald-200 z-10 border-4 inset-0 m-auto animate-bounce border-white px-4 py-2'><div className='text-right'>
        <button className='text-right text-4xl text-red-500' onClick={()=>setTeamCompleted(false)}>&times;</button></div>
        <h3 className='text-black text-lg'>MUY BIEN {userName}!! <br/>COMPLETASTE UN EQUIPO!!</h3></div></div>
  )
}

export default ModalTriumph