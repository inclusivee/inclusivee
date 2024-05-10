const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient

async function createProfile(fullName, birthday, cpf, rg,phone,userId) {

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


module.exports = createProfile; 
