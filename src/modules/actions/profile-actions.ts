"use server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

async function createOrUpdateCandidateProfile(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const birthday = formData.get("birthday") as string;
  const cpf = formData.get("cpf") as string;
  const rg = formData.get("rg") as string;
  const phone = formData.get("phone") as string;
  const userIdString = formData.get("userId") as string;
  const userId = parseInt(userIdString) as unknown as number;

  const existingCandidateProfile = await prisma.candidateProfile.findFirst({
    where: { userId: userId },
  });
  // Aqui usamos upsert para criar ou atualizar o perfil do candidato
  if (existingCandidateProfile) {
    // Se o candidateProfile já existe, faz o update usando o idCandidateProfile
    await prisma.candidateProfile.update({
      where: {
        idCandidateProfile: existingCandidateProfile.idCandidateProfile,
      },
      data: {
        fullName,
        birthday,
        cpf,
        rg,
        phone,
      },
    });
  } else {
    // Se o candidateProfile não existe, faz o create
    await prisma.candidateProfile.create({
      data: {
        fullName,
        birthday,
        cpf,
        rg,
        phone,
        userId,
      },
    });
  }

  // Redireciona para a próxima página após a operação
  redirect("/pages/registryCurriculum/address");
}

export default createOrUpdateCandidateProfile;
