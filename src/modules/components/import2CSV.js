const csv = require("csv-parse");
const fs = require("fs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  const fileStream = fs.createReadStream(
    "../../../public/assets/db-mommy/db_mommy.csv",
  );

  const parser = csv.parse({ columns: true });

  parser.on("data", async (row) => {
    console.log(row); // Imprime os dados da linha atual como um objeto

    try {
      const email = row["Endereço de e-mail"];
      const firstName = row["Primeiro Nome"];
      const lastName = row["Sobrenome"];
      const phoneNumber = row["Telefone"];
      const nationality = row["Nacionalidade"];
      const birthDate = row["Data de Nascimento"];
      const professionalSummary = row["Resumo Profissional"];
      const jobTitle1 = row["Cargo - Experiência 1"];
      const employer1 = row["Empregador - Experiência 1"];
      const description1 = row["Descrição - Experiência 1"];
      const city1 = row["Cidade - Experiência 1"];
      const startDate1 = row["Início - Experiência 1"];
      const endDate1 = row["Término - Experiência 1"];
      const courseName1 = row["Nome - Curso 1"];
      const degree1 = row["Título ou Nível de Ensino - Curso 1"];
      const startDateEducation1 = row["Início - Curso 1"];
      const endDateEducation1 = row["Término - Curso 1"];
      const descriptionEducation1 = row["Descrição - Curso 1"];

      // Verifique se os valores estão definidos antes de tentar usá-los
      if (
        !email ||
        !firstName ||
        !lastName ||
        !phoneNumber ||
        !nationality ||
        !birthDate ||
        !professionalSummary
      ) {
        console.error("Missing data for user creation:", {
          email,
          firstName,
          lastName,
          phoneNumber,
          nationality,
          birthDate,
          professionalSummary,
        });
        return; // Pula para a próxima linha do CSV
      }

      const existingUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
        include: {
          addresses: true, // Inclui os endereços associados ao usuário na busca
        },
      });

      if (!existingUser) {
        console.error(`No user found with email ${email}.`);
        return; // Pula para a próxima linha do CSV se o usuário não existir
      }

      const userId = existingUser.id;

      // Criação de perfil candidato
      await prisma.candidateProfile.create({
        data: {
          fullName: `${firstName} ${lastName}`,
          birthday: birthDate,
          cpf: "", // CPF não está disponível no CSV, substitua conforme necessário
          rg: "", // RG não está disponível no CSV, substitua conforme necessário
          phone: phoneNumber,
          userId,
        },
      });

      // Criação de experiência
      await prisma.experience.create({
        data: {
          jobTitle: jobTitle1,
          companyName: employer1,
          startDate: startDate1,
          endDate: endDate1,
          responsibilities: description1,
          userId,
        },
      });

      // Criação de habilidades (exemplo simplificado)
      await prisma.ability.create({
        data: {
          nameAbility: "Exemplo de Habilidade",
          experienceYears: 5, // Substitua pelo valor real
          userId,
        },
      });

      // Criação de educação (exemplo simplificado)
      await prisma.education.create({
        data: {
          degree: degree1,
          institution: courseName1,
          startDateEducation: startDateEducation1,
          endDateEducation: endDateEducation1,
          description: descriptionEducation1,
          userId,
        },
      });
    } catch (error) {
      console.error("Error creating user or related data:", error);
    }
  });

  parser.on("error", (error) => {
    console.error("Error parsing CSV:", error);
  });

  parser.on("end", async () => {
    console.log("Finished processing CSV data (users only).");
    await prisma.$disconnect();
  });

  fileStream.pipe(parser);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
