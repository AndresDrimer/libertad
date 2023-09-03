import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { SignOutButton } from "../components/SignOutButton";
import Navbar from "../components/Navbar";
import prisma from "@/prisma";
import { Session } from "inspector";
import Image from "next/image";
import CardBoard from "../components/CardBoard";





async function Dashboard() {
  const session = await getServerSession(authOptions);

 const userId = session?.user?.id

  const cards = await prisma.card.findMany({});


   //// esto lo levanta solo una vez de la db y despues solo actualiza los cambios de forma local, sin cambiar la Db original (toggle) - ESTO ES EL CLIENT
   // es un state que tiene cada uno de los componenetes
   // si ese estado esta true, aparece ya marcada con una class dinamica
   //cada usuario tiene una propiedad own que es el id de cada una de las cartas que tiene (tiene todo lo demas ya demas ...? o //se escribe diferente)
   
  return (
    <section>
      {/* Navbar */}
      <Navbar />

      <h1>Dashboard</h1>
 
      <div className="">
        <Image
          src={"/logo-liber.png"}
          alt="logo"
          className="relative"
          width={200}
          height={200}
        />
        <h1 className="text-md text-amber-300/90 text-xl md:text-5xl text-normal">
          - CONTROL DE FIGUS -
        </h1>

        <p className="bolder hover:scale-110 text-2xl md:text-5xl">
          LIBERTADORES
        </p>

        <h1 className="text-center">
          Control de figus LIBERTADORES
          <br />
          de {JSON.stringify(session?.user?.name)}
        </h1>
      </div>

<CardBoard cards={cards} userId={userId}/>
      {/* Cartas */}
      
    </section>
  );
}

export default Dashboard;
