import prisma from "../../../lib/prisma";


export async function fetchSelectedCandidates({ jobId }: { jobId: number }) {
  try {
    const job = await prisma.job.findMany({
      where: { idJob: jobId },
      include: {
        requiredAbilities: true,
        desiredExperienceYears: true,
        desiredEducationLevel: true,
      },
    });

    if (!job) throw new Error('Job not found');

    const candidates = await prisma.user.findMany({
      where: {
        ability: {
          some: {
            nameAbility: {
              in: job.requiredAbilities.map(ab => ab.name),
            },
          },
        },
        experience: {
          some: {
            AND: [
              { jobTitle: { contains: job.jobTitle } },
              { experienceYears: { gte: job.desiredExperienceYears } },
            ],
          },
        },
        education: {
          some: {
            OR: [
              { degree: job.desiredEducationLevel },
              { institution: { contains: job.institution } },
            ],
          },
        },
      },
      include: {
        ability: true,
        experience: true,
        education: true,
      },
      take: 10, // Limita os resultados a 10 candidatos
    });

    return candidates;
  } catch (error) {
    console.error('Error finding suitable candidates:', error);
    throw error;
  }
}

export default fetchSelectedCandidates;
