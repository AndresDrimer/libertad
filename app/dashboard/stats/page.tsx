import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/prisma";
import { CardWithTeam, UserWithCards } from "@/types";
import { Prisma, Team, User } from "@prisma/client";
import { getServerSession } from "next-auth";
import Image from "next/image";

const StatsPage = async () => {
  const session = await getServerSession(authOptions);

  const userId = session?.user.id ?? "";

  const cardsTotal = await prisma.card.findMany({});

  const cardsOwned = await prisma.card.findMany({
    where: {
      ownersById: { has: session?.user.id },
    },
  });

  const MissingCardsQuantity = cardsTotal.length - cardsOwned.length;

  //can´t make correct primsa query to get missingCards, so I use JS instead to filter
  const cardsNotOwned = cardsTotal.filter(
    (it) => !it.ownersById.includes(userId)
  );

  // can´t make exact correct query to obtain teams completed by user, so I will be using JS to fill the gap and taking 17 as the number of cards to complete a collection.It does not cover "CL" team, but it is not a team but a special section (and it has no image asociated)

  const allTeams = await prisma.team.findMany({});

  const cardsWithTeam = await prisma.card.findMany({
    where: {
      ownersById: { has: session?.user.id },
    },
    include: {
      team: {
        select: {
          teamName: true,
          image: true,
        },
      },
    },
  });

  const teamsInUserCards = cardsWithTeam.map((it) => it.team);

  const count: { [key: string]: number } = {};

  if (teamsInUserCards) {
    teamsInUserCards.forEach(function (team) {
      if (team) {
        const teamName = team.teamName;
        const teamImage = team.image;
        count[teamName] = (count[teamName] || 0) + 1;
      }
    });
  }

  const completedTeams = Object.entries(count)
    .filter(([key, value]) => value === 17)
    .map(([key, value]) => {
      const team = allTeams.find((t) => t.teamName === key);
      return {
        teamName: key,
        image: team?.image,
      };
    });

  console.log("aca", completedTeams);

  return (
    <div className="mx-auto text-center">
      
      {/* cuadro dato duro*/}
      <p className="bolder hover:scale-110 text-2xl md:text-5xl mt-8 mb-4">
          TUS FIGUS
        </p>
      <div className="grid grid-cols-1 grid-rows-2 text-center md:w-1/2 mx-auto ">
        <div>
          <div className="tablecell title">Marcadas</div><div className="tablecell text-5xl text-emerald-500">
            {cardsOwned.length}
          </div>
          <div className="tablecell title">Faltantes</div>

          
          <div className="tablecell text-5xl text-red-500">
            {MissingCardsQuantity}
          </div>
        </div>
        <div>
          <div className="tablecell title">Equipos completados</div>
          <div className="tablecell grid grid-cols-4 gap-1 items-center p-2">
            {completedTeams.map((it) => (
              <Image
                src={it.image!}
                width={25}
                height={25}
                alt="escudo"
                key={it.teamName}
                style={{ width: "auto", height: "auto" }}
                className="p-1"
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6">

         <p className="bolder hover:scale-110 text-2xl md:text-5xl mt-8 mb-4">
          DETALLE
        </p>
        <h1 className="text-md text-[#f2c464] text-xl md:text-5xl text-normal mb-6">
          - LATE -
        </h1>

          <div className="grid grid-cols-6 gap-4 justify-center place-items-center bg-gray-300/50 p-6 rounded-lg">
            {cardsOwned.map((it) => (
              <span
                className="border-2 rounded-md px-1 mx-1 bg-emerald-500/50"
                key={it.id}
              >
                {it.absoluteNum}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-6">
        <h1 className="text-md text-[#f2c464] text-xl md:text-5xl text-normal mb-6">
          - NOLA -
        </h1>
          <div className="grid grid-cols-6 gap-1 justify-center place-items-center bg-gray-300/50 p-6 rounded-lg">
          {cardsNotOwned.map((it) => (
              <span className="border-2 rounded-md px-1 mx-1 bg-red-500/50" key={it.id}>
                {it.absoluteNum}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
