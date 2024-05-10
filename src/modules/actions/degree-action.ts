"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createEducation(formData: FormData) {
  const degree = formData.get("degree") as string;
  const institution = formData.get("institution") as string;
  const startDateEducation = formData.get("startDateEducation") as unknown as string;
  const endDateEducation = formData.get("endDateEducation") as unknown as string;
  const userIdString = formData.get("userId") as string;
  const userId = parseInt(userIdString) as unknown as number;
  
  console.log(formData)

  await prisma.education.create({
    data: {
      degree,
      institution,
      startDateEducation,
      endDateEducation,
      userId
    },
  });
}

export default createEducation;
