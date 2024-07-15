import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateJob(idJob: number, formData: FormData) {
  // Extrair dados do FormData
  const jobTitle = formData.get("jobTitle") as string;
  const requiredAbilitiesStr = formData.get("requiredAbilities") as string;
  const requiredAbilities = JSON.parse(requiredAbilitiesStr).split(", ");
  const desiredExperienceYears = parseInt(
    formData.get("desiredExperienceYears") as string,
    10
  );
  const desiredEducationLevel = formData.get("desiredEducationLevel") as string;
  const descriptionJob=formData.get("descriptionJob") as string;

  // Atualizar a vaga existente
  await prisma.job.update({
    where: {
      idJob: idJob,
    },
    data: {
      jobTitle,
      requiredAbilities,
      desiredExperienceYears,
      desiredEducationLevel,
      descriptionJob,
    },
  });
}

export default updateJob;
