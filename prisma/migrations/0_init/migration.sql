-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "zipcode" TEXT,
    "street" TEXT,
    "number" TEXT,
    "district" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "idAddress" SERIAL NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("idAddress")
);

-- CreateTable
CREATE TABLE "profileCandidate" (
    "birthday" TEXT,
    "cpf" TEXT,
    "rg" TEXT,
    "phone" TEXT,
    "userId" INTEGER NOT NULL,
    "fullName" TEXT,
    "idCandidateProfile" SERIAL NOT NULL,

    CONSTRAINT "profileCandidate_pkey" PRIMARY KEY ("idCandidateProfile")
);

-- CreateTable
CREATE TABLE "resumeProfile" (
    "idResumeProfile" SERIAL NOT NULL,
    "resume" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "resumeProfile_pkey" PRIMARY KEY ("idResumeProfile")
);

-- CreateTable
CREATE TABLE "experience" (
    "idExperience" SERIAL NOT NULL,
    "jobTitle" TEXT,
    "companyName" TEXT,
    "responsibilities" TEXT,
    "userId" INTEGER NOT NULL,
    "startDate" TEXT,
    "endDate" TEXT,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("idExperience")
);

-- CreateTable
CREATE TABLE "ability" (
    "idAbility" SERIAL NOT NULL,
    "nameAbility" TEXT,
    "experienceYears" INTEGER,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ability_pkey" PRIMARY KEY ("idAbility")
);

-- CreateTable
CREATE TABLE "education" (
    "idEducation" SERIAL NOT NULL,
    "degree" TEXT,
    "institution" TEXT,
    "userId" INTEGER NOT NULL,
    "startDateEducation" TEXT,
    "endDateEducation" TEXT,

    CONSTRAINT "education_pkey" PRIMARY KEY ("idEducation")
);

-- CreateTable
CREATE TABLE "job" (
    "idJob" SERIAL NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "requiredAbilities" TEXT[],
    "desiredExperienceYears" INTEGER NOT NULL,
    "desiredEducationLevel" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "job_pkey" PRIMARY KEY ("idJob")
);

-- CreateTable
CREATE TABLE "jobApplication" (
    "idJobApplication" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "jobId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jobApplication_pkey" PRIMARY KEY ("idJobApplication")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profileCandidate" ADD CONSTRAINT "profileCandidate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resumeProfile" ADD CONSTRAINT "resumeProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ability" ADD CONSTRAINT "ability_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "education" ADD CONSTRAINT "education_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job" ADD CONSTRAINT "job_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobApplication" ADD CONSTRAINT "jobApplication_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "job"("idJob") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobApplication" ADD CONSTRAINT "jobApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

