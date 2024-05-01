
const fs = require('fs');
const fastcsv = require('fast-csv');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const stream = fs.createReadStream("../../../public/assets/db-mommy/db_mommy.csv").pipe(fastcsv.parse({ headers: true }));

stream.on('data', async (data) => {
 // Transforma os dados da linha do CSV em um objeto JSON
 const dados = Object.fromEntries(Object.entries(data));

 await prisma.UserMommytech.create({
    data: {
      // Outros campos do seu modelo, se houver
      dados: dados,
    },
 });
});

stream.on('end', async () => {
 console.log('Importação concluída');
 await prisma.$disconnect();
});