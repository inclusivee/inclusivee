"use server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

async function createAbility(formData: FormData) {
  const nameAbility = formData.get("nameAbility") as string;
  const experienceYears = formData.get("experienceYears") as unknown as number;
  const userIdString = formData.get("userId") as string;
  const userId = parseInt(userIdString) as unknown as number;

  await prisma.ability.create({
    data: {
      nameAbility,
      experienceYears,
      userId,
    },
  });
  redirect("/pages/registryCurriculum/experience");
}

export default createAbility;
