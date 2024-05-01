/*
  Warnings:

  - You are about to drop the `Ability` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ability" DROP CONSTRAINT "Ability_userId_fkey";

-- DropTable
DROP TABLE "Ability";

-- CreateTable
CREATE TABLE "ability" (
    "idAbility" SERIAL NOT NULL,
    "nameAbility" TEXT NOT NULL,
    "experienceYears" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ability_pkey" PRIMARY KEY ("idAbility")
);

-- AddForeignKey
ALTER TABLE "ability" ADD CONSTRAINT "ability_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
