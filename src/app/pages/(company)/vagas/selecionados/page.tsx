"use client";
import CandidateCard from "@/modules/components/candidateSelected";
import WhatsappMessenger from "@/modules/components/whatsappMessenger";
import Image from "next/image";


export default function CandidateSelected() {
 
  


  return (
    <div className="w-full">
      <div className="lg:mx-10 lg:mt-10 lg:flex lg:items-center lg:justify-between ">
        <h2 className=" text-[#008037] lg:text-3xl lg:font-bold">
          Selecionar Candidatos
        </h2>
      </div>
      <div className="flex flex-row justify-between lg:mx-10 lg:mt-10 lg:h-auto lg:w-5/6">
       
          <CandidateCard />
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
