import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const numericId = parseInt(id, 10);

  if (isNaN(numericId)) {
    console.error("Invalid id:", id);
    return NextResponse.json({ error: "Invalid id format" }, { status: 400 });
  }

  const wine = await prisma.Wine.delete({
    where: { id: numericId },
  });

  return NextResponse.json(wine);
}
