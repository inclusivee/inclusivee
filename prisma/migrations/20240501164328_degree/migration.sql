/*
  Warnings:

  - The primary key for the `profileCandidate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `userMommytech` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "profileCandidate_cpf_key";

-- AlterTable
ALTER TABLE "profileCandidate" DROP CONSTRAINT "profileCandidate_pkey",
ADD COLUMN     "idCandidateProfile" SERIAL NOT NULL,
ADD CONSTRAINT "profileCandidate_pkey" PRIMARY KEY ("idCandidateProfile");

-- DropTable
DROP TABLE "userMommytech";

-- CreateTable
CREATE TABLE "education" (
    "idEducation" SERIAL NOT NULL,
    "degree" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "startDateEducation" TIMESTAMP(3) NOT NULL,
    "endDateEducation" TIMESTAMP(3),
    "isCurrentlyStudying" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "education_pkey" PRIMARY KEY ("idEducation")
);

-- AddForeignKey
ALTER TABLE "education" ADD CONSTRAINT "education_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
