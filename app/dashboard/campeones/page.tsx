import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";
import prisma from "@/prisma";
import { TeamWithCountry } from "@/types";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/authOptions";

const Campeones = async () => {

  const teamsWithCountry: TeamWithCountry[]= await prisma.team.findMany({include:{country: true}, orderBy:{yearsOfChampionship: "desc"}})

  const championTeams = teamsWithCountry.filter((it) => it.yearsOfChampionship.every(it=>it.length>1));

  
  return (
    <div className="">
      <div className="w-full flex flex-col justify-center items-center mb-8">
        <h1 className="text-md mt-4 text-[#f2c464] text-xl md:text-5xl text-normal">
          CAMPEONES:
        </h1>

        <p className="bolder hover:scale-110 text-2xl md:text-5xl">
          LIBERTADORES
        </p>
      </div>

      <div className="w-full grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {championTeams.map((it) => (
          <Link href={`/dashboard/teams/${it.id}`} className="flex justify-center hover:scale-110" key={it.id}>
            <Image
              src={it.image!}
              alt="escudo"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
              className="ml-2 p-4"
            />
          </Link>
        ))}

    


      </div>
      <Footer />
    </div>
  );
};

export default Campeones;
