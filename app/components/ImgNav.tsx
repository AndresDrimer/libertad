"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import tapaAlbum from "@/public/tapa-album.png"
import siluetaLibertadores from "@/public/silueta-libertadores.png"
function ImgNav() {
  const path = usePathname();

  return (
    <div className="cursor-pointer">
      {path === "/campeones" ? (
        <div className="flex flex-col items-center justify-center">
          <Link href="/dashboard" className="hover:scale-110 relative">
            <Image
              src={tapaAlbum}
              alt="logo-copa"
              width={70}
              height={70}
              style={{ width: "auto", height: "auto" }}
              className=""
              
            />
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Link href="/dashboard/campeones" className="hover:scale-110">
            <Image
              src={siluetaLibertadores}
              alt="silueta-libertadores"
              width={40}
              height={80}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </Link>
        </div>
      )}
    </div>
  );
}

export default ImgNav;
