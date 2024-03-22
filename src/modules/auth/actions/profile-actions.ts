"use server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

async function createCandiateProfile(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const birthday = formData.get("birthday") as string;
  const cpf = formData.get("cpf") as string;
  const rg = formData.get("rg") as string;
  const nationality = formData.get("nationality") as string;
  const phone = formData.get("phone") as string;
  const userIdString = formData.get("userId") as string;
  const userId = parseInt(userIdString) as unknown as number;

  await prisma.candidateProfile.create({
    data: {
      firstName,
      lastName,
      birthday,
      cpf,
      rg,
      nationality,
      phone,
      userId,
    },
  });
  redirect("/pages/registryCurriculum/address");
}

export default createCandiateProfile;
