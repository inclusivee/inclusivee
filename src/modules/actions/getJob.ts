"use server"

import prisma from "../../../lib/prisma";


async function getJob({userId}: {userId: number}) {
  try {
    // Busca todas as experiências do usuário
    const jobs = await prisma.job.findMany({
      where: {
        userId: userId,
      }
    });
    return  jobs;
  } catch (error) {
    console.error('Erro ao buscar experiências e educações:', error);
    throw error; // Lança o erro para que ele possa ser tratado pelo chamador
  } finally {
    prisma.$disconnect(); // Fecha a conexão com o banco de dados
  }
}

export default getJob;
