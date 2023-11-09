import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/prisma";
import { CardWithTeam, UserWithCards } from "@/types";
import { Prisma, Team, User } from "@prisma/client";
import { getServerSession } from "next-auth";
import Image from "next/image";

const StatsPage = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id ?? "";

   {/* get cartas totales de la db*/}
  const cardsTotal = await prisma.card.findMany({
    orderBy: { absoluteNum: "asc" },
  });

   {/* get cartas que tengo, de la db*/}
  const cardsOwned = await prisma.card.findMany({
    where: {
      ownersById: { has: session?.user.id },
    },
    orderBy: { absoluteNum: "asc" },
  });

  const MissingCardsQuantity = cardsTotal.length - cardsOwned.length;

  //can´t make correct primsa query to get missingCards, so I use JS instead to filter
  const cardsNotOwned = cardsTotal.filter(
    (it) => !it.ownersById.includes(userId)
  );


  
  // method to get completed teams, as they have 17 cards each team
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

  return (
    <div className="mx-auto text-center">

      {/* titulo */}
      <p className="bolder hover:scale-110 text-2xl md:text-5xl mt-8 mb-4">
        MIS FIGUS
      </p>

       {/* cuadro*/}
      <div className="grid grid-cols-1 grid-rows-2 text-center md:w-1/2 mx-auto ">
        <div>
          <div className="tablecell title">Ya tengo</div>
          <div className="tablecell text-5xl text-emerald-500 py-2">
            {cardsOwned.length}
          </div>
          <div className="tablecell title">Me faltan</div>

          <div className="tablecell text-5xl py-2 text-red-500">
            {MissingCardsQuantity}
          </div>
        </div>
        <div>
          <div className="tablecell title">Equipos completados</div>
          <div className="tablecell grid grid-cols-4 gap-1 sm:grid-cols-5 lg:grid-cols-6 items-center p-2">
            {completedTeams.map((it) => (
              <Image
                src={it.image!}
                width={25}
                height={25}
                alt="escudo"
                key={it.teamName}
                style={{ width: "auto", height: "auto" }}
                className="px-1 py-2"
              />
            ))}
          </div>
        </div>
      </div>

       {/* detalle */}
      <div>
        <div>
          <p className="bolder hover:scale-110 text-2xl md:text-5xl mb-4">
            DETALLE
          </p>
          <h1 className="text-md text-[#f2c464] text-xl md:text-5xl text-normal mb-6">
            &ldquo;YA TENGO&rdquo;
          </h1>

          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 justify-center place-items-center bg-gray-300/50 p-6 rounded-lg">
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

        <div className="mt-12">
          <h1 className="text-md text-[#f2c464] text-xl md:text-5xl text-normal mb-6">
            &ldquo;ME FALTAN&rdquo;
          </h1>
          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 justify-center place-items-center bg-gray-300/50 p-6 rounded-lg">
            {cardsNotOwned.map((it) => (
              <span
                className="border-2 rounded-md px-1 mx-1 bg-red-500/50"
                key={it.id}
              >
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
