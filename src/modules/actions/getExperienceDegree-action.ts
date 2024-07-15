"use server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getUserEducationsAndExperiences({userId}: {userId: number}) {
  try {
    // Busca todas as experiências do usuário
    const experiences = await prisma.experience.findMany({
      where: {
        userId: userId,
      }
    });

    // Busca todas as educações do usuário
    const educations = await prisma.education.findMany({
      where: {
        userId: userId,
      }
    });
    console.log('Experiências server:', experiences);
    console.log('Educações server:', educations);
    return { experiences, educations };
  } catch (error) {
    console.error('Erro ao buscar experiências e educações:', error);
    throw error; // Lança o erro para que ele possa ser tratado pelo chamador
  } finally {
    prisma.$disconnect(); // Fecha a conexão com o banco de dados
  }
}

export default getUserEducationsAndExperiences;
