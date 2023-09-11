import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/prisma";
import { getServerSession } from "next-auth";


const StatsPage = async () => {
    const session = await getServerSession(authOptions);

    const cardsOwned = await prisma.card.findMany({
        where: {
          ownersById: { has: session?.user.id }
        }
      });

      console.log(cardsOwned.length)

  return (
    <div>StatsPage

<p className="text-md text-normal">Tu nombre de usuario actual  es:  <span className="text-bolder"> {session?.user.name}</span></p>
<p className="text-xs">Querés modificarlo?</p>

{/* cuadro dato duro*/}
<div>
<h3>Cartas que tenés</h3>



</div>



    </div>
  )
}

export default StatsPage