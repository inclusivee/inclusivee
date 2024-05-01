"use server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import Experience from '../../app/pages/registryCurriculum/experience/page';

const prisma = new PrismaClient();

async function createExperience(formData: FormData) {
  const jobTitle = formData.get("jobTitle") as string;
  const companyName = formData.get("companyName") as string;
  const startDate = formData.get("startDate") as unknown as Date;
  const endDate = formData.get("endDate") as unknown as Date;
  const isCurrent = formData.get("isCurrent") as unknown as boolean;
  const responsibilities = formData.get("responsibilities") as string;
  const userIdString = formData.get("userId") as string;
  const userId = parseInt(userIdString) as unknown as number;

  await prisma.experience.create({
    data: {
      jobTitle,
      companyName,
      startDate,
      endDate,
      isCurrent,
      responsibilities,
      userId
    },
  });
  redirect("/pages/registryCurriculum/experience");
}

export default createExperience;
