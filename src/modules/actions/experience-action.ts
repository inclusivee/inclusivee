"use server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

async function createExperience(formData: FormData) {
  const jobTitle = formData.get("jobTitle") as string;
  const companyName = formData.get("companyName") as string;
  const startDate = formData.get("startDate") as unknown as string;
  const endDate = formData.get("endDate") as unknown as string;
  const responsibilities = formData.get("responsibilities") as string;
  const userIdString = formData.get("userId") as string;
  const userId = parseInt(userIdString) as unknown as number;
  console.log(formData)

  await prisma.experience.create({
    data: {
      jobTitle,
      companyName,
      startDate,
      endDate,
      responsibilities,
      userId
    },
  });
 /*  redirect("/pages/registryCurriculum/ability"); */
}

export default createExperience;
