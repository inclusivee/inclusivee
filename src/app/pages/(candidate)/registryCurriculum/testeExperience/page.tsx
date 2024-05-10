"use client";
import React, { useState, useEffect } from "react";
import BackgroudForm from "@/modules/components/bgForm";
import Link from "next/link";
import Modal from "react-modal";
import FormEducation from "@/modules/components/formdegree";
import FormExperienceComponent from "@/modules/components/formExperience";
import { PrismaClient } from "@prisma/client";
import Cookies from "js-cookie";

Modal.setAppElement("body");
interface Experience {
  idExperience: number;
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string | null;
  responsibilities: string;
  userId: number;
  user: {
    id: number;
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    type: string;
  };
}

interface Education {
  idEducation: number;
  degree: string;
  institution: string;
  startDateEducation: string;
  endDateEducation: string | null;
  userId: number;
  user: {
    id: number;
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    type: string;
  };
}

const prisma = new PrismaClient();

export default function FormExperience() {
  const userId = Cookies.get("userId");
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  // Exemplo de uso
  useEffect(() => {
    async function fetchUserEducationsAndExperiences() {
      if (userId) {
        try {
          // Busca todas as experiências do usuário
          const experiencesData = await prisma.experience.findMany({
            where: {
              userId: Number(userId),
            },
            include: {
              user: true, // Inclui detalhes do usuário relacionado
            },
          });

          // Busca todas as educações do usuário
          const educationsData = await prisma.education.findMany({
            where: {
              userId: Number(userId),
            },
            include: {
              user: true, // Inclui detalhes do usuário relacionado
            },
          });

          setExperiences(experiencesData);
          setEducations(educationsData);
        } catch (error) {
          console.error("Erro ao buscar experiências e educações:", error);
        }
      }
    }

    fetchUserEducationsAndExperiences();
  }, [userId]);
  const ExperienceCard = ({
    companyName,
    jobTitle,
    startDate,
    endDate,
    idExperience,
  }: Experience) => {
    // ... (Add date formatting logic if needed) ...

    return (
      <div className="justify-batween flex flex-row items-center">
        <div className="flex flex-col">
          <h3 className="text-md">{jobTitle}</h3>
          <p className="text-sm">{companyName}</p>
        </div>{" "}
        <p className="text-sm">
          {startDate} - {endDate}
        </p>
      </div>
    );
  };

  const EducationCard = ({
    degree,
    institution,
    startDateEducation,
    endDateEducation,
  }: Education) => {
    // ... (Add date formatting logic if needed) ...

    return (
      <div className="justify-batween flex flex-row items-center">
        <div className="flex flex-col">
          <h3 className="text-md">{degree}</h3>
          <p className="text-sm">{institution}</p>
        </div>
        <p className="text-sm">
          {startDateEducation} - {endDateEducation}
        </p>
      </div>
    );
  };

  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

  const handleOpenExperienceModal = () => {
    setIsExperienceModalOpen(true);
  };

  const handleCloseExperienceModal = () => {
    setIsExperienceModalOpen(false);
  };

  const handleOpenEducationModal = () => {
    setIsEducationModalOpen(true);
  };

  const handleCloseEducationModal = () => {
    setIsEducationModalOpen(false);
  };

  return (
    <main className="flex flex-row items-start justify-start">
      <BackgroudForm />
      <div className="h-full w-full">
        <div className="lg:mt-8 lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-start lg:px-10">
          <h2 className="text-2xl font-bold text-[#008037]">Cadastro</h2>
          <h3 className="text-md font-normal text-[#008037]">
            Informações profissionais
          </h3>

          <div className="lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-sm font-normal text-[#008037]">
              Experiências profissionais
            </h3>

            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.idExperience} // Certifique-se de que esta propriedade esteja disponível
                companyName={experience.companyName}
                jobTitle={experience.jobTitle}
                startDate={experience.startDate}
                endDate={experience.endDate}
                responsibilities={experience.responsibilities}
                userId={experience.userId}
                user={experience.user} // Certifique-se de que esta propriedade esteja disponível
              />
            ))}
            <div
              onClick={handleOpenExperienceModal}
              className="text-sm font-normal text-[#008037]"
            >
              + Adicionar Nova Experiência Profissional
            </div>

            <Modal isOpen={isExperienceModalOpen}>
              <div className="flex  items-start justify-end">
                <button
                  onClick={handleCloseExperienceModal}
                  className="ml-1 mt-2 flex flex-row items-end justify-end rounded bg-red-600 px-4 py-2 text-white"
                >
                  X
                </button>
              </div>
              <FormExperienceComponent
                onCloseModal={handleCloseExperienceModal}
              />
            </Modal>
          </div>
          <div className="lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-sm font-normal text-[#008037]">
              Formação Acadêmica
            </h3>

            {educations.map((education) => (
              <EducationCard
                key={education.idEducation} // Certifique-se de que esta propriedade esteja disponível
                degree={education.degree}
                institution={education.institution}
                startDateEducation={education.startDateEducation}
                endDateEducation={education.endDateEducation}
                userId={education.userId} // Certifique-se de que esta propriedade esteja disponível
                user={education.user} // Certifique-se de que esta propriedade esteja disponível
              />
            ))}

            <div
              onClick={handleOpenEducationModal}
              className="text-sm font-normal text-[#008037]"
            >
              + Adicionar Nova Formação Acadêmica
            </div>

            <Modal isOpen={isEducationModalOpen}>
              <FormEducation onCloseModal={handleCloseEducationModal} />
            </Modal>
          </div>

          <div className="lg:ml-42 lg:mt-5 lg:flex lg:w-full lg:flex-row lg:justify-between">
            <Link
              href="/pages/registryCurriculum/address"
              className="flex w-52 items-center justify-center rounded-3xl border border-[#008037] bg-[#E3E3E4] py-3 text-sm font-normal text-[#008037]"
            >
              Anterior
            </Link>
            <Link
              href="/pages/registryCurriculum/ability"
              className="flex w-52 items-center justify-center rounded-3xl border border-[#008037] bg-[#008037] py-3 text-sm font-normal text-white"
            >
              Próximo
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
