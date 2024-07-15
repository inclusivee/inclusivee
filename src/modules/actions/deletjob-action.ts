import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateJobStatus({ jobId, userId }) {
  try {
    // Atualiza o status do trabalho para inativo
    const updatedJob = await prisma.job.update({
      where: {
        idJob_userId: {
          idJob: jobId,
          userId: userId,
        },
      },
      data: {
        active: false,
      },
    });
    return updatedJob;
  } catch (error) {
    console.error('Erro ao atualizar o status do trabalho:', error);
    throw error; // Lança o erro para que ele possa ser tratado pelo chamador
  } finally {
    prisma.$disconnect(); // Fecha a conexão com o banco de dados
  }
}

export default updateJobStatus;
