import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async () =>{
    try {
        const cardsComplete = await prisma.card.findMany({
    orderBy: { absoluteNum: "asc" },
    include: { team: { include: { country: true } } },
  });

  if(!cardsComplete) {return NextResponse.json({ error: "No cards found" }, { status: 404 });};

  return NextResponse.json(cardsComplete, {status:200})

    } catch (error) {
        return NextResponse.json({error: "could not connect DB"}, {status:500})
    }
}

