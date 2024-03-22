-- CreateTable
CREATE TABLE "profileCandidate" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "profileCandidate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "profileCandidate" ADD CONSTRAINT "profileCandidate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
