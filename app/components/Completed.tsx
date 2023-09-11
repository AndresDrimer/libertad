"use client"
import { useState } from 'react'
import ModalTriumph from './ModalTriumph'
import { Card } from '@prisma/client'
import { CardComplete } from '@/types'

function Completed({userName, userId, cards}:{userName: string, userId: string, cards: CardComplete[]}) {
    const [teamCompleted, setTeamCompleted] = useState(false)


    //get an array of teams
  //  const teams = cards.map(it=> it.team)
  // const filteredTeams = teams.filter((value, index, self) => {
 //   return self.indexOf(value) === index;
//  });
    
    

    //method for every team
  //  const cardsAucas = cards.filter(it=> it.team ==="Aucas");
 //   const completedAucas = cardsAucas.every(it=>it.ownersById.includes(userId));
    
    //get a programatical way of having all of them

  
    return (
    <div className=''>{teamCompleted && <ModalTriumph userName={userName} setTeamCompleted={setTeamCompleted} />}</div>
  )
}

export default Completed