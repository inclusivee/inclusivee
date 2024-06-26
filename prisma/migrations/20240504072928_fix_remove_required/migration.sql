-- AlterTable
ALTER TABLE "ability" ALTER COLUMN "nameAbility" DROP NOT NULL,
ALTER COLUMN "experienceYears" DROP NOT NULL;

-- AlterTable
ALTER TABLE "address" ALTER COLUMN "zipcode" DROP NOT NULL,
ALTER COLUMN "street" DROP NOT NULL,
ALTER COLUMN "number" DROP NOT NULL,
ALTER COLUMN "district" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "state" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL;

-- AlterTable
ALTER TABLE "education" ALTER COLUMN "degree" DROP NOT NULL,
ALTER COLUMN "institution" DROP NOT NULL,
ALTER COLUMN "startDateEducation" DROP NOT NULL;

-- AlterTable
ALTER TABLE "experience" ALTER COLUMN "jobTitle" DROP NOT NULL,
ALTER COLUMN "companyName" DROP NOT NULL,
ALTER COLUMN "responsibilities" DROP NOT NULL,
ALTER COLUMN "startDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "profileCandidate" ALTER COLUMN "birthday" DROP NOT NULL,
ALTER COLUMN "cpf" DROP NOT NULL,
ALTER COLUMN "rg" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "fullName" DROP NOT NULL;
