const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient

async function createAddress(zipcode,
  street,
  number,
  district,
  city,
  state,
  country,
  userId,) {

    await prisma.address.create({
    data: {
      zipcode,
      street,
      number,
      district,
      city,
      state,
      country,
      userId,
    },
  });
}


module.exports = createAddress; 


