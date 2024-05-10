const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient

async function createEducation(degree, institution, startDateEducation, endDateEducation, userId) {

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


module.exports = createEducation; 
