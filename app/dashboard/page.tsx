import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { SignOutButton } from "../components/SignOutButton";
import Navbar from "../components/Navbar";
import prisma from "@/prisma";
import { Session } from "inspector";
import Image from "next/image";

import EachCard from "../components/EachCard";





async function Dashboard() {
  const session = await getServerSession(authOptions);

 const userId = session?.user?.id

  const cards = await prisma.card.findMany({ orderBy: {absoluteNum: "asc"}});
  
  return (
    <section className="bg-[#181717] text-white p-4">
      
      {/* Navbar */}
      <Navbar />

   
 
      <div className="w-full flex flex-col justify-center items-center mb-8">
        <Image
          src={"/logo-liber.png"}
          alt="logo"
          className="relative"
          width={200}
          height={200}
          priority
        />
        <h1 className="text-md text-[#f2c464] text-xl md:text-5xl text-normal">
          - CONTROL DE FIGUS -
        </h1>

        <p className="bolder hover:scale-110 text-2xl md:text-5xl">
          LIBERTADORES
        </p>

      </div>



      {/* Cartas */}
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 mx-auto px-4">
    {cards.map((it) => (
      <EachCard it={it} />
     
    ))}
  </div>
    </section>
  );
}

export default Dashboard;
