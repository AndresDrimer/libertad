 // @ts-ignore
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import prisma from "@/prisma";
import Image from "next/image";
import EachCard from "@/app/components/EachCard";
import logoLiber from "@/public/logo-liber.png"
import TeamsCompleted from "@/app/components/TeamsCompleted";
import { CardComplete } from "@/types";
import { format } from "path";
import { revalidateTag } from "next/cache";

async function Dashboard() {
  const session = await getServerSession(authOptions);

  const userId: string = session?.user?.id ?? "";
  const userName: string = session?.user?.name ?? "";


const res = await fetch("http://localhost:3000/api/cards", {
  method: "GET",
  next: {tags: ["cardsComplete"]},
  
}) 

if(!res.ok) { throw new Error(`HTTP error! status: ${res.status}`);};


const {cardsComplete}  = await res.json() || []




  return (
    <section className="">
      <div className="w-full  justify-center items-center mb-2">
        <div className="flex flex-col items-center">


        <div className=" justify-center relative w-1/3 sm:w-1/4 md:w-1/5  mx-auto">
          <Image
            src={logoLiber}
            alt="copa"
            className="mt-10"
            width={400}
            height={385}
            sizes="(min-width: 2140px) 400px, (min-width: 780px) 18.66vw, (min-width: 640px) calc(25vw - 8px), calc(33.44vw - 11px)"
            priority
          />
        </div>

        <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-amarillo-claro to-amarillo-oscuro text-2xl  md:text-3xl lg:text-4xl tracking-wide leading-1 hover:scale-110">
          CONTROL DE FIGUS
        </h1>

        <p className="bolder hover:scale-110 text-4xl md:text-5xl  tracking-tighter leading-5 align-text-top md:leading-7 lg:tracking-normal">
          LIBERTADORES
        </p>
      </div>
</div>


      {/*<TeamsCompleted userName={userName} userId={userId} cards={cardsComplete}/>
       */}

      <div className="mt-10">
        
      {/* Cartas */}
     <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 mx-auto px-4">  

        {cardsComplete.map((it: CardComplete) => (
          <EachCard it={it} key={it.id} />
        ))} 
 


      </div> 
      
      
      </div>
    </section>
  );
}

export default Dashboard;
