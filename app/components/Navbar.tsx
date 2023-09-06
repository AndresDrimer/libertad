import React from "react";
import { SignOutButton } from "./SignOutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import { IoMdSettings } from "react-icons/io";


async function Navbar() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <nav className="flex items-center gap-2 ">
    
     <div className="flex flex-col items-center justify-center mr-auto"> <Image
        src={"/logo-liber.png"}
        alt="logo"
        
        width={50}
        height={50}
      /></div>

      <p className="text-lg">Hola {session?.user?.name?.toUpperCase()} !</p>
      {/*
      <Link href="/user/edit"><IoMdSettings /></Link>
     
      */} <SignOutButton /> 
    </nav>
  );
}

export default Navbar;
