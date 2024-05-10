"use client";
import React, { useState, useEffect, useCallback } from "react";
import BackgroudForm from "@/modules/components/bgForm";
import Link from "next/link";
import Modal from "react-modal";
import FormEducation from "@/modules/components/formdegree";
import FormExperienceComponent from "@/modules/components/formExperience";
import { PrismaClient } from "@prisma/client";
import Cookies from "js-cookie";
import getUserEducationsAndExperiences from "@/modules/actions/getExperienceDegree-action";

Modal.setAppElement("body");
interface Experience {
  idExperience: number;
  jobTitle: string | null;
  companyName: string | null;
  startDate: string | null;
  endDate: string | null;
  responsibilities: string | null;
  userId: number;
}

interface Education {
  idEducation: number;
  degree: string | null;
  institution: string | null;
  startDateEducation: string | null;
  endDateEducation: string | null | null;
  userId: number;
}

const prisma = new PrismaClient();

export default function FormExperience() {
  const userId = Cookies.get("userId");
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  // Exemplo de uso
  useEffect(() => {
    if (userId) {
      const parsedUserId = parseInt(userId, 10);
      getUserEducationsAndExperiences({ userId: parsedUserId })
        .then(({ experiences, educations }) => {
          setExperiences(experiences);
          setEducations(educations);
          console.log("Experiências front:", experiences);
          console.log("Educações: front", educations);
        })
        .catch((error) => {
          console.error("Erro ao buscar experiências e educações:", error);
        });
    }
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
      <div className="mb-2 flex flex-row items-center  justify-between px-2">
        <div className="flex flex-col">
          <h3 className="text-md">{jobTitle}</h3>
          <p className="text-[12px]">{companyName}</p>
        </div>
        <div className="flex w-32 items-center justify-start">
          <p className="text-[8px]">
            {startDate} - {endDate}
          </p>
        </div>
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
      <div className="mb-2 flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-md ">{degree}</h3>
          <p className="text-[12px]">{institution}</p>
        </div>
        <div className="flex w-32 items-center justify-start">
          <p className="text-[8px]">
            {startDateEducation} - {endDateEducation}
          </p>
        </div>
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

          <div className="lg:mt-5 lg:flex lg:w-full lg:flex-row lg:items-start lg:justify-between">
            <h3 className="text-sm font-normal text-[#008037]">
              Experiências profissionais
            </h3>
            {/*             <button onClick={handleClick}>Buscar Dados</button>
             */}
            <div className="w-3/6">
              {experiences.map((experience) => (
                <ExperienceCard
                  key={experience.idExperience} // Certifique-se de que esta propriedade esteja disponível
                  companyName={experience.companyName}
                  jobTitle={experience.jobTitle}
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                  responsibilities={experience.responsibilities}
                  userId={experience.userId}
                  idExperience={0}
                />
              ))}
              <div
                onClick={handleOpenExperienceModal}
                className="text-sm font-normal text-[#008037]"
              >
                + Adicionar Nova Experiência Profissional
              </div>
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
          <div className="lg:mt-5 lg:flex lg:w-full lg:flex-row lg:items-start lg:justify-between">
            <h3 className="text-sm font-normal text-[#008037]">
              Formação Acadêmica
            </h3>
            <div className="w-3/6">
              {educations.map((education) => (
                <EducationCard
                  key={education.idEducation} // Certifique-se de que esta propriedade esteja disponível
                  degree={education.degree}
                  institution={education.institution}
                  startDateEducation={education.startDateEducation}
                  endDateEducation={education.endDateEducation}
                  userId={education.userId} // Certifique-se de que esta propriedade esteja disponível
                  idEducation={0}
                />
              ))}

              <div
                onClick={handleOpenEducationModal}
                className="text-sm font-normal text-[#008037]"
              >
                + Adicionar Nova Formação Acadêmica
              </div>
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
