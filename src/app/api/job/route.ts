
import { NextResponse, type NextRequest } from "next/server";
import prisma from "../../../../lib/prisma";



export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const idjob = searchParams.get("idjob");
  const jobid = Number(idjob);

  const job = await prisma.job.findUnique({
    where: {
      idJob: jobid,
    },
  });

  if (!job) {
    return NextResponse.json(
      { message: "Trabalho não encontrado" },
      { status: 404 },
    );
  }
  const candidates = await prisma.user.findMany({
    where: {
      ebility: { // Corrigido de 'ebility' para 'ability'
        some: {
          nameAbility: {
            in: job.requiredAbilities,
          },
        },
      },
    },
    include: {
      ebility: true, // Inclui as habilidades dos usuários na resposta
      experience:true
    },
    take: 10,
  });

  
  // Filtrar candidatos com base nos anos de experiência desejados
  const filteredCandidates = candidates.filter(candidate => {
    // Supondo que cada experiência tenha startDate e endDate
    let totalExperienceYears = candidate.experience.reduce((acc, exp) => {
      const startDate = new Date(exp.startDate);
      const endDate = new Date(exp.endDate || new Date()); // Usar data atual se endDate não estiver definido
      const experienceYears = endDate.getFullYear() - startDate.getFullYear();
      return acc + experienceYears;
    }, 0);

    return totalExperienceYears >= job.desiredExperienceYears;
  });

  return NextResponse.json({
    status: 200,
    message: "Usuário encontrado",
    candidates212: filteredCandidates,
   /*  candidates, */
    job,
  });
}
