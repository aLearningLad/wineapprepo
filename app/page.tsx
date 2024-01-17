import prisma from "@/lib/prisma";
import { Landing } from "./components/homeUI";

// async function getWines() {
//   const wines = await prisma.Wine.findMany();
//   return wines;
// }

export default async function Home() {
  // const wines = await getWines();
  // console.log({ wines });
  return (
    <main className="flex min-h-screen w-full">
      <Landing />
    </main>
  );
}
