const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient

async function createAbility(nameAbility, experienceYears, userId) {

  await prisma.ability.create({
    data: {
      nameAbility,
      experienceYears,
      userId,
    },
  });
}


module.exports = createAbility; 

