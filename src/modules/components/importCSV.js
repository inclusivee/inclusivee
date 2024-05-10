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
      const firstName = row["Primeiro Nome"];
      const lastName = row["Sobrenome"];
      const birthday = row["Data de Nascimento"];
      const cpf = "";
      const rg = "";
      const phone = row["Telefone"];
      const email = row["Endereço de e-mail"];

      // Verifique se os valores estão definidos antes de tentar usá-los
      if (
        !firstName ||
        !lastName ||
        !birthday ||
        !phone ||
        !email
      ) {
        console.error("Missing data for user creation:", {
          firstName,
          lastName,
          birthday,
          cpf,
          rg,
          phone,
          email,
        });
        return; // Pula para a próxima linha do CSV
      }
      const existingUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
        include: {
          candidateProfiles: true,
        },
      });

      if (!existingUser) {
        console.error(`No user found with email ${email}.`);
        return; // Pula para a próxima linha do CSV se o usuário não existir
      }

      const userId = existingUser.id;

      if (existingUser.candidateProfiles.length === 0) {
        await prisma.candidateProfile.create({
          data: {
            fullName:`${firstName} ${lastName}`,
            birthday,
            cpf,
            rg,
            phone,
            userId,
          },
        });
      } else {
        console.log(`User with email ${email} already exists in Experience.`);
      }
    } catch (error) {
      console.error("Error creating user:", error);
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
