import prisma from "@/prisma";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";

async function TeamPage({ params }: { params: Params }) {
  const actualTeam = await prisma.team.findUnique({
    where: { id: params.id },
    include: { country: true },
  });

  return (
    <div className="w-full mx-auto text-center">
      <h1 className="text-md text-[#f2c464] text-xl md:text-5xl text-normal mt-4">
        EQUIPOS:
      </h1>

      <p className="bolder hover:scale-110 text-2xl md:text-5xl">
        {actualTeam?.teamName}
      </p>


      <div className="flex justify-center mt-4">
        <Image
          src={actualTeam?.image!}
          alt="escudo"
          width={250}
          height={250}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </div>

<div className="max-w-[400px] mx-auto">
      <div className="flex items-center gap-2 justify-center mt-8 border-2 rounded-md w-3/4 md:w-1/2 mx-auto py-1">
        <Image
          src={`/${actualTeam?.country?.image}`}
          alt="bandera"
          width={50}
          height={50}
          style={{ width: "auto", height: "auto" }}
        /><h4 className="text-md pr-2">
        {actualTeam?.country?.countryName}</h4>
      </div>
</div>
{actualTeam?.yearsOfChampionship && actualTeam?.yearsOfChampionship.every(it=>it.length>1)  ? (
<div className="flex flex-col w-full items-center gap-2 justify-center mt-4">

        <Image
          src="/copa-sola-bg.png"
          alt="bandera"
          width={130}
          height={130}
          style={{ width: "auto", height: "auto" }}
          className=""
        />
     

     <div className="flex flex-col gap-4 w-1/2 items-center mt-4">
            {actualTeam?.yearsOfChampionship.map(it=>(<div className="border-2 rounded-md flex items-center gap-2 px-2 py-1" key={it}><GiCheckMark className="text-emerald-500"/><p className="text-xl">{it}</p></div>))}
        </div>
</div>) : (<div className="mt-8 flex justify-center gap-2 items-center"> <RxCrossCircled className="text-red-500" /> No ganó ninguna edición de la Copa</div>)}
   
    </div>
  );
}

export default TeamPage;
