import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();
  const {
    wineName,
    wineYear,
    wineType,
    wineVarietal,
    wineRating,
    wineConsumed,
    wineDateConsumed,
    region,
    wineStyle,
    foodPairings,
    wineColor,
    bottleSize,
    tastingNotes,
    oakAging,
    alcoholContent, // ====> CHECK TYPE ON DB
    vintner,
  } = res;
  console.log({ res });

  const result = await prisma.Wine.create({
    data: {
      id: Math.floor(Math.random() * 100),
      name: wineName,
      year: wineYear,
      type: wineType,
      varietal: wineVarietal,
      rating: wineRating,
      consumed: wineConsumed,
      dateConsumed: wineDateConsumed,
      region,
      winestyle: wineStyle,
      foodpairings: foodPairings,
      winecolor: wineColor,
      bottlesize: bottleSize,
      tastingNotes,
      oakaging: oakAging,
      alcoholContent,
      vintner,
    },
  });
  return NextResponse.json({ result });
}
