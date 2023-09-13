import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import prisma from '@/prisma';
import { CardComplete } from '@/types';
import Completed from './Completed';

const TeamsCompleted = async ({userName, userId, cards}:{userName: string, userId: string, cards: CardComplete[]}) => {

     // method to get completed teams, as they have 17 cards each team
     const session = await getServerSession(authOptions);
    
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
    <div>
        
        <Completed userName={userName} userId={userId} cards={cards} completedTeams={completedTeams}/>
       



    </div>
  )
}

export default TeamsCompleted