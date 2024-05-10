const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient

async function createAccount(name, email, password, type) {

  await prisma.user.create({
    data: {
      name,
      email,
      password,
      type,
    },
  });
}


module.exports = createAccount; 
