import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { jobTitle, requiredAbilities, desiredExperienceYears, desiredEducationLevel, userId } = req.body;

      const requiredAbilitiesArray = requiredAbilities.split(",").map(ability => ability.trim());

      const job = await prisma.job.create({
        data: {
          jobTitle,
          requiredAbilities: requiredAbilitiesArray,
          desiredExperienceYears: parseInt(desiredExperienceYears, 10),
          desiredEducationLevel,
          userId: parseInt(userId, 10),
        },
      });

      return res.status(200).json(job);
    } catch (error) {
      console.error('Erro ao criar a vaga:', error);
      return res.status(500).json({ error: "Erro ao criar a vaga" });
    }
  } else {
    return res.status(405).json({ error: "Método não permitido" });
  }
}