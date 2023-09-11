import Image from "next/image";
import { escudos } from "@/dbInternal";
import Escudo from "./Escudo";
import prisma from "@/prisma";
import { TeamWithCountry } from "@/types";
import Link from "next/link";


async function Carrousel() {

  const teamsWithCountry= await prisma.team.findMany({include:{country: true}})
  
  const teamsActuallyPlaying = teamsWithCountry.filter(it=>it.isPlayingThisEdition)

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-[70px] relative shadow-lg overflow-hidden before:h-[100px] before:w-[200px] before:absolute before:content-['']  before:l-0 before:t-0 before: z-2 after:h-[100px] after:w-[200px] after:absolute after:content-[''] after:r-0 after:t-0 after:z-2">
        <div className="h-[70px] flex items-center animate-useSlideshow md:animate-useSlideShowMd xl:animate-useSlideShowXl">

{teamsActuallyPlaying.map(it=> <Escudo key={it.id} it={it}/>)}
{teamsActuallyPlaying.map(it=> <Escudo key={it.id} it={it}/>)}
{teamsActuallyPlaying.map(it=> <Escudo key={it.id} it={it}/>)}
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
