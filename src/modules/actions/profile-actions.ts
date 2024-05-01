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

 // Aqui usamos upsert para criar ou atualizar o perfil do candidato
 await prisma.candidateProfile.upsert({
    where: { cpf: cpf }, // Critério de unicidade baseado no userId
    update: {
      fullName,
      birthday,
      cpf,
      rg,
      phone,
    },
    create: {
      fullName,
      birthday,
      cpf,
      rg,
      phone,
      userId,
    },
 });

 // Redireciona para a próxima página após a operação
 redirect("/pages/registryCurriculum/address");
}

export default createOrUpdateCandidateProfile;
