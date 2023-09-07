import React, { useState } from "react";
import { SignOutButton } from "./SignOutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import { IoMdSettings } from "react-icons/io";
import BgAudio from "./BgAudio";


async function Navbar() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }


  return (
    <nav className="flex items-center gap-2 px-2 shadow-2xl justify-between">
   
     <div className="flex flex-col items-center justify-center"> <Image
        src={"/silueta-libertadores.png"}
        alt="logo"
        
        width={40}
        height={40}
        style={{ width: 'auto', height: 'auto' }}
        priority
      /></div>

     
      {/*
      <Link href="/user/edit"><IoMdSettings /></Link>
    
      */}  <div className="flex flex-col justify-center items-center gap-4"
      >  <SignOutButton /> <BgAudio />
    </div> 
    </nav>
  );
}

export default Navbar;
