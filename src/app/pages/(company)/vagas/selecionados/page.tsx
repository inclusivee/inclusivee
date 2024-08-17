"use client";
import CandidateCard from "@/modules/components/candidateSelected";
import WhatsappMessenger from "@/modules/components/whatsappMessenger";
import Image from "next/image";
import Cookies from "js-cookie";
import { useState } from "react";



export default function CandidateSelected() {
 
  const [candidates, setCandidates] = useState([]);

  const jobId = Cookies.get("selectedJobId");

   async function fetchSelectedCandidates() {
    console.log("Id do trabalho",jobId)
    try {
      const response = await fetch(`/api/job?idjob=${jobId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCandidates(data.candidates212)
      return data.candidates212; // Assumindo que esta é a chave correta na resposta
    } catch (error) {
      console.error("Erro ao buscar candidatos:", error);
      throw error;
    }
  }

  fetchSelectedCandidates();
  return (
    <div className="w-full">
      <div className="lg:mx-10 lg:mt-10 lg:flex lg:items-center lg:justify-between ">
        <h2 className=" text-[#008037] lg:text-3xl lg:font-bold">
          Selecionar Candidatos
        </h2>
      </div>
      <div className="flex flex-row justify-between lg:mx-10 lg:mt-10 lg:h-auto lg:w-5/6">
       
          <CandidateCard  candidates={candidates}/>
        <div className="flex flex-row gap-5 lg:w-3/6 ">
          <Image
            src="/assets/image/Divider 2.png"
            alt="Icone de vagas"
            width={15}
            height={20}
            className=""
          />
          <div className="lg:w-[500px]">
            <WhatsappMessenger />
          </div>
        </div>
      </div>
    </div>
  );
}
