"use client"
import { useEffect, useState, useRef } from 'react';
import ModalTriumph from './ModalTriumph';
import { CardComplete } from '@/types';

type CompletedTeams = {
  teamName: string;
  image: string | undefined;
}[];

function Completed({
  userName,
  userId,
  cards,
  completedTeams,
}: {
  userName: string;
  userId: string;
  cards: CardComplete[];
  completedTeams: CompletedTeams;
}) {
  const [teamCompleted, setTeamCompleted] = useState(false);
  const prevCompletedTeams = useRef<CompletedTeams>(completedTeams);

  useEffect(() => {
    if (prevCompletedTeams.current.length < completedTeams.length) {
      console.log('use effect actua');
      setTeamCompleted(true);
    }

    prevCompletedTeams.current = completedTeams;
  }, [completedTeams]);

  console.log('ahora', completedTeams);

  return (
    <div className="">
      {teamCompleted && (
        <ModalTriumph userName={userName} setTeamCompleted={setTeamCompleted} />
      )}
    </div>
  );
}

export default Completed;