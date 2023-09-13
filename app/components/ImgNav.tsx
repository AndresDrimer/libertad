"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function ImgNav() {
    const path = usePathname();

  return (
<div className='cursor-pointer'>
    {path==="/campeones" ? (<div className="flex flex-col items-center justify-center">
    <Link href="/dashboard" className="hover:scale-110">
      <Image
        src={"/tapa-album.png"}
        alt="logo"
        width={70}
        height={70}
        style={{ width: "auto", height: "auto" }}
        className=''
      />
    </Link>
  </div>) : (<div className="flex flex-col items-center justify-center">
    <Link href="/campeones" className="hover:scale-110">
      <Image
        src={"/silueta-libertadores.png"}
        alt="logo"
        width={40}
        height={40}
        style={{ width: "auto", height: "auto" }}
        priority
      />
    </Link>
  </div>)}
</div>
    
  )
}

export default ImgNav