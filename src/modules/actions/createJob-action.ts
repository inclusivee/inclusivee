"use server"

import prisma from "../../../lib/prisma";


async function createJob(formData: FormData) {
  // Extract data from FormData
  const jobTitle = formData.get("jobTitle") as string;
  const requiredAbilitiesStr = formData.get("requiredAbilities") as string;
  const requiredAbilities = requiredAbilitiesStr
    .split(",")
    .map((ability) => ability.trim());
  const desiredExperienceYears = parseInt(
    formData.get("desiredExperienceYears") as string,
    10,
  );
  const desiredEducationLevel = formData.get("desiredEducationLevel") as string;
  const userIdString = formData.get("userId") as string;
  const userId = parseInt(userIdString) as unknown as number;
  const descriptionJob= formData.get("descriptionJob") as string;

  // Create a new job
  await prisma.job.create({
    data: {
      jobTitle,
      requiredAbilities,
      desiredExperienceYears,
      desiredEducationLevel,
      descriptionJob,
      userId,
    },
  });
}
// createJob-action.mjs (using default export)
export default createJob;
