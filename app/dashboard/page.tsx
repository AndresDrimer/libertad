import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { SignOutButton } from "../components/SignOutButton";

import prisma from "@/prisma";
import { Session } from "inspector";
import Image from "next/image";
import Footer from "@/app/components/Footer"
import EachCard from "@/app/components/EachCard";
import Completed from "@/app/components/Completed";




async function Dashboard() {
  const session = await getServerSession(authOptions);

 const userId: string  = session?.user?.id  ?? ""
 const userName : string  = session?.user?.name ?? ""

  const cardsWithTeam = await prisma.card.findMany({ orderBy: {absoluteNum: "asc"}, include: {team: true}});

  const cardsComplete = await prisma.card.findMany({ orderBy: {absoluteNum: "asc"}, include: {team: {include: {country: true}}}});

  const cards = await prisma.card.findMany({ orderBy: {absoluteNum: "asc"}});
 
  return (
    <section className=" ">     
      <div className="w-full flex flex-col justify-center items-center mb-8">
        <Image
          src={"/logo-liber.png"}
          alt="logo"
          className="relative"
          width={200}
          height={200}
          style={{ width: 'auto', height: 'auto' }}
          priority
        />
        <h1 className="text-md text-[#f2c464] text-xl md:text-5xl text-normal">
          - CONTROL DE FIGUS -
        </h1>

        <p className="bolder hover:scale-110 text-2xl md:text-5xl">
          LIBERTADORES
        </p>

      </div>

      <Completed userName={userName} userId={userId} cards={cardsComplete}/>

      {/* Cartas */}
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 mx-auto px-4">
    {cardsComplete.map((it) => (
      <EachCard it={it} key={it.id}/>
     
    ))}
  </div>

    </section>
  );
}

export default Dashboard;
