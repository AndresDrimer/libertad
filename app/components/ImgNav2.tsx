"use client"
import {TfiStatsUp} from "react-icons/tfi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function ImgNav2() {
    const path = usePathname();
  return (
    <div>
    {path==="/dashboard/stats" ? ( <Link href="/dashboard" className="hover:scale-110">
      <Image
        src={"/tapa-album.png"}
        alt="logo"
        width={25}
        height={25}
        style={{ width: "auto", height: "auto" }}
        className=''
      />
    </Link>) :

        ( <Link href="/dashboard/stats">
    <TfiStatsUp  size="20px"/></Link>) 
    }
   </div>
  )
}

export default ImgNav2