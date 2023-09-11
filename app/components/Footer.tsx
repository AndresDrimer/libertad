
const Footer = () => {
    const currentYear = new Date().getFullYear()
  
  return (
    <div className='text-white text-center text-md mt-10 border-t pt-1'>@ <a href="mailto:andresdrimer@hotmail.com"> Andrés Drimer</a> - {currentYear}</div>
  )
}

export default Footer