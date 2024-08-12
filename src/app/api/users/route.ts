// src/app/api/users/route.ts
import { PrismaClient } from "@prisma/client";
import { type NextRequest } from 'next/server'

const prisma = new PrismaClient();

export async function GET(req: NextRequest){
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const userId = Number(id);

   const user = await prisma.user.findUnique ({
      where: {
        id: userId,
      },
    });
      return Response.json({ message: "Usuário encontrado", user });
   
}
