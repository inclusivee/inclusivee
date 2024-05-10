/*
  Warnings:

  - You are about to drop the column `isCurrentlyStudying` on the `education` table. All the data in the column will be lost.
  - You are about to drop the column `isCurrent` on the `experience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "education" DROP COLUMN "isCurrentlyStudying";

-- AlterTable
ALTER TABLE "experience" DROP COLUMN "isCurrent";
