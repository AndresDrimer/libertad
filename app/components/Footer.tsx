import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  
  return (
    <div className='text-white text-center text-lg mt-10 border-t pt-1'>@ Andrés Drimer - {currentYear}</div>
  )
}

export default Footer