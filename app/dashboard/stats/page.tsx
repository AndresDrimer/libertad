import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/prisma";
import { getServerSession } from "next-auth";

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

//can´t make correct query to get missingCards

  // can´t make correct query to obtain teams complet By some User

  console.log("aca");

  return (
    <div>
      StatsPage
      <p className="text-md text-normal">
        Tu nombre de usuario actual es:{" "}
        <span className="text-bolder"> {session?.user.name}</span>
      </p>
      <p className="text-xs">Querés modificarlo?</p>
      {/* cuadro dato duro*/}
      <h2 className="mt-8 text-center">Resumen de tus figus</h2>
      <div className="grid grid-cols-3 grid-rows-2 text-center lg:w-1/2 mx-auto">
        <div className="tablecell title">Tenés</div>
        <div className="tablecell title">Faltan</div>
        <div className="tablecell title">Equipos completados</div>
        <div className="tablecell">{cardsOwned.length}</div>
        <div className="tablecell">{MissingCardsQuantity}</div>
        <div className="tablecell">e</div>
      </div>
      <div>
        <div>
          <h3>Figus que tenés:</h3>
          <div className="grid grid-cols-10 gap-1 justify-center place-items-center ">
            {cardsOwned.map((it) => (
              <span className="border-2 rounded-md px-1 mx-1">
                {it.absoluteNum}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3>Figus que te faltan:</h3>
          <div className="grid grid-cols-10 gap-1 justify-center place-items-center ">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
