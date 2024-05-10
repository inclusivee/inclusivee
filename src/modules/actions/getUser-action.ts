import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getUserWithAllData({userId}: {userId: number}) {
  // Busca o usuário e inclui todas as suas experiências e educações relacionadas
  const userWithExperiencesAndEducations = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      addresses: true, // Inclui endereços relacionados
      candidateProfiles: true, // Inclui perfis candidatos relacionados
      Experience: true, // Inclui experiências relacionadas
      Ability: true, // Inclui habilidades relacionadas
      Education: true, // Inclui educações relacionadas
    },
  });

  // Agora você tem o usuário completo com todas as suas experiências e educações
  // Você pode manipular os dados conforme necessário

  return userWithExperiencesAndEducations;
}

// Exemplo de uso
/* getUserWithAllData(1)
 .then(user => {
    console.log('Usuário completo:', user);
    // Aqui você pode manipular os dados do usuário, experiências e educações
  })
 .catch(error => {
    console.error('Erro ao buscar usuário:', error);
  })
 .finally(() => {
    prisma.$disconnect(); // Lembre-se de fechar a conexão quando terminar
  }); */

  export default getUserWithAllData;