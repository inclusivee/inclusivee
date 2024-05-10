const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createExperience(
  jobTitle,
  companyName,
  startDate,
  endDate,
  responsibilities,
  userId,
) {
  await prisma.experience.create({
    data: {
      jobTitle,
      companyName,
      startDate,
      endDate,
      responsibilities,
      userId,
    },
  });
}

module.exports = createExperience;
