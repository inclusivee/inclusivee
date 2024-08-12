"use client";
import React, { useState, useEffect, useCallback } from "react";
import Modal from "react-modal";
import { PrismaClient } from "@prisma/client";
import JobForm from "@/modules/components/formJob";
import Cookies from "js-cookie";
import getJob from "@/modules/actions/getJob";
import FormNewJob from "@/modules/components/formNewJob";
import ViewJob from "../../../../modules/components/viewJob";
import EditJob from "@/modules/components/editJob";
import DeletJob from "@/modules/components/deletJob";
import ViewedJob from "@/modules/components/viewedJob";
import updateJobStatus from "@/modules/actions/deletjob-action";
import Link from "next/link";
import { cookies } from "next/headers";

Modal.setAppElement("body");

interface Job {
  idJob?: number;
  jobTitle: string;
  requiredAbilities: string[];
  desiredExperienceYears: number;
  desiredEducationLevel: string;
  descriptionJob: string;
  userId: number;
  active: boolean;
}

export default function CreateJob() {
  const userIdString = Cookies.get("userId");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isCreating, setIsCreating] = useState(true);
  const [showFormType, setShowFormType] = useState<"new" | "edit">("new");
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewingJob, setViewingJob] = useState<Job | null>(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  useEffect(() => {
    if (userIdString) {
      const parsedUserId = parseInt(userIdString, 10);
      if (!isNaN(parsedUserId)) {
        getJob({ userId: parsedUserId })
          .then((jobs) => {
            setJobs(jobs);
          })
          .catch((error) => {
            console.error("Erro ao buscar experiências e educações:", error);
          });
      }
    }
  }, [userIdString]);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setIsCreating(false);
    setShowFormType("edit");
  };
  const handleSelectedJobClick = (job: Job) => {
    Cookies.set('selectedJobId', job.idJob, { expires: 7 }); // Expira em 7 dias
    window.location.href = '/pages/vagas/selecionados';
  };

  const handleViewClick = (job: Job) => {
    setViewingJob(job);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
  };

  const JobCard = ({
    idJob,
    jobTitle,
    requiredAbilities,
    desiredExperienceYears,
    desiredEducationLevel,
    descriptionJob,
    userId,
    active,
  }: Job) => {
    return (
      <div className="w-6/6 flex cursor-pointer flex-row items-center justify-between p-2 px-2 ">
        <div className="flex flex-row justify-between  border hover:border-b-slate-400 lg:w-full">
          <div
            className="w-full"
            onClick={() =>
              handleSelectedJobClick({
                idJob,
                jobTitle,
                requiredAbilities,
                desiredExperienceYears,
                desiredEducationLevel,
                userId,
                descriptionJob,
                active,
              })
            }
          >
            <h3 className="text-md">{jobTitle}</h3>
          </div>
          <div className="flex items-center">
            <div
              className=""
              onClick={() =>
                handleViewClick({
                  idJob,
                  jobTitle,
                  requiredAbilities,
                  desiredExperienceYears,
                  desiredEducationLevel,
                  userId,
                  descriptionJob,
                  active,
                })
              }
            >
              <ViewJob />
            </div>
            <div
              className=""
              onClick={() =>
                handleJobClick({
                  idJob,
                  jobTitle,
                  requiredAbilities,
                  desiredExperienceYears,
                  desiredEducationLevel,
                  userId,
                  descriptionJob,
                  active,
                })
              }
            >
              <EditJob />
            </div>
            <div className="" onClick={() => setIsConfirmModalOpen(true)}>
              <DeletJob />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
    setSelectedJob(null);
    setIsCreating(true);
    setShowFormType("new");
  };

  const handleCloseJOBModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteJob = async () => {
    if (selectedJob) {
      try {
        await updateJobStatus({
          jobId: selectedJob.idJob,
          userId: selectedJob.userId,
        });
        setIsConfirmModalOpen(false); // Fecha o modal de confirmação
      } catch (error) {
        console.error("Erro ao inativar a vaga:", error);
      }
    }
  };
  return (
    <div className="w-full">
      <div className="lg:mx-10 lg:mt-10 lg:flex lg:items-center lg:justify-between ">
        <h2 className=" text-[#008037] lg:text-3xl lg:font-bold">Vagas</h2>
        <button
          onClick={openModal}
          className=" bg-[#3A7652] text-white lg:mt-5  lg:flex lg:w-[260px] lg:items-center lg:justify-around lg:rounded-3xl lg:px-3 lg:py-2 lg:text-xl"
        >
          <p className="lg:text-2xl"> + </p> <p>Adicionar Vagas</p>
        </button>
      </div>

      {/* Modal Create Job */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseJOBModal}
        contentLabel="Adicionar Vagas"
      >
        <div className="flex items-start justify-end">
          <button
            onClick={handleCloseJOBModal}
            className="ml-1 mt-2 flex flex-row items-end justify-end rounded bg-red-600 px-4 py-2 text-white"
          >
            X
          </button>
        </div>
        {showFormType === "new" ? (
          <FormNewJob closeModal={handleCloseJOBModal} />
        ) : (
          <JobForm
            closeModal={handleCloseJOBModal}
            selectedJob={selectedJob}
            isCreating={isCreating}
          />
        )}
      </Modal>

      {/* Modal View Job */}
      <Modal
        isOpen={isViewModalOpen}
        onRequestClose={handleCloseViewModal}
        contentLabel="Visualizar Vaga"
      >
        <div className="flex items-start justify-end">
          <button
            onClick={handleCloseViewModal}
            className="ml-1 mt-2 flex flex-row items-end justify-end rounded bg-red-600 px-4 py-2 text-white"
          >
            X
          </button>
        </div>
        {viewingJob && <ViewedJob jobDetails={viewingJob} />}
      </Modal>

      {isConfirmModalOpen && (
        <Modal
          isOpen={isConfirmModalOpen}
          onRequestClose={() => setIsConfirmModalOpen(false)}
          contentLabel="Confirmação de Inativação"
        >
          <div className="flex h-screen items-center justify-center">
            <div className="rounded bg-white p-5 shadow-lg">
              <h2 className="mb-2 text-lg font-semibold">Tem certeza?</h2>
              <p>Você realmente deseja inativar esta vaga?</p>
              <div className="mt-4 flex items-center space-x-2">
                <button
                  onClick={handleDeleteJob}
                  className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Confirmar
                </button>
                <button
                  onClick={() => setIsConfirmModalOpen(false)} // Fecha o modal
                  className="rounded bg-gray-200 px-4 py-2 text-black hover:bg-gray-300"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <div className="lg:mx-10 lg:mt-5  lg:flex lg:w-2/6">
        <div className="lg:flex ">
          <div className="rounded-t-lg bg-[#3A7652] lg:flex lg:h-10 lg:w-32 lg:items-center lg:justify-center lg:shadow-lg">
            <div className="">Abertas</div>
          </div>
          <div>
            <div className="rounded-t-lg bg-[#DDEDDF] lg:flex lg:h-10 lg:w-32 lg:items-center lg:justify-center lg:shadow-lg">
              Encerradas
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-6/6 border-stone-400 lg:mx-10 lg:h-[300px] lg:rounded-b-2xl lg:border lg:bg-[#e2e0e2] lg:p-5">
        {jobs
          .filter((job) => job.active)
          .map((job) => (
            <JobCard
              key={job.idJob}
              idJob={job.idJob}
              jobTitle={job.jobTitle}
              requiredAbilities={job.requiredAbilities}
              desiredExperienceYears={job.desiredExperienceYears}
              desiredEducationLevel={job.desiredEducationLevel}
              userId={job.userId}
              descriptionJob={job.descriptionJob}
              active={job.active} // Passa a propriedade active para o componente JobCard, se necessário
            />
          ))}
      </div>
    </div>
  );
}
