/*
  Warnings:

  - The primary key for the `address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `address` table. All the data in the column will be lost.
  - The primary key for the `profileCandidate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `firstName` on the `profileCandidate` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `profileCandidate` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `profileCandidate` table. All the data in the column will be lost.
  - You are about to drop the column `nationality` on the `profileCandidate` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `profileCandidate` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fullName` to the `profileCandidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "address" DROP CONSTRAINT "address_pkey",
DROP COLUMN "id",
ADD COLUMN     "idAddress" SERIAL NOT NULL,
ADD CONSTRAINT "address_pkey" PRIMARY KEY ("idAddress");

-- AlterTable
ALTER TABLE "profileCandidate" DROP CONSTRAINT "profileCandidate_pkey",
DROP COLUMN "firstName",
DROP COLUMN "id",
DROP COLUMN "lastName",
DROP COLUMN "nationality",
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD CONSTRAINT "profileCandidate_pkey" PRIMARY KEY ("cpf");

-- CreateTable
CREATE TABLE "experience" (
    "idExperience" SERIAL NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "isCurrent" BOOLEAN NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("idExperience")
);

-- CreateTable
CREATE TABLE "Ability" (
    "idAbility" SERIAL NOT NULL,
    "nameAbility" TEXT NOT NULL,
    "experienceYears" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("idAbility")
);

-- CreateIndex
CREATE UNIQUE INDEX "profileCandidate_cpf_key" ON "profileCandidate"("cpf");

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
