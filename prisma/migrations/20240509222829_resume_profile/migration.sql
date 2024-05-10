/*
  Warnings:

  - You are about to drop the column `resume` on the `experience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "experience" DROP COLUMN "resume";

-- CreateTable
CREATE TABLE "resumeProfile" (
    "idResumeProfile" SERIAL NOT NULL,
    "resume" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "resumeProfile_pkey" PRIMARY KEY ("idResumeProfile")
);

-- AddForeignKey
ALTER TABLE "resumeProfile" ADD CONSTRAINT "resumeProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
