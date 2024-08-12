import Image from "next/image";
import { useEffect, useState } from "react";
import fetchSelectedCandidates from "../actions/selectedCandidates";
import Cookies from "js-cookie";



interface candidateSelec {
  id: number;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  type: string;
}


function CandidateCard() {

  const jobIdString = Cookies.get("selectedJobId");
  const [candidates, setCandidates] = useState<candidateSelec[]>([]);
  
  useEffect(() => {
    
    if (jobIdString) {
      const parsedjobId = parseInt(jobIdString, 10);
      if (!isNaN(parsedjobId)) {
      fetchSelectedCandidates({jobId:parsedjobId})
        .then((candidates) => {
          setCandidates(candidates);
        })
        .catch((error) => {
          console.error("Erro ao buscar candidatos:", error);
        });
      }
    }
  }, [jobIdString]);

  return (
    <div className="rounded-md bg-white p-4 shadow-md hover:shadow-lg ml-10 ">
      <div className="flex items-start gap-5">
        <div className="mt-1">
          <input type="checkbox" className="accent-red-500" />
        </div>
        <div>
          <Image
            src="/assets/image/candidato.png"
            alt="Foto Candidato"
            width={90}
            height={0}
            className="h-20 w-20 rounded-md"
          />
        </div>

        <div className="ml-4 mt-1">
          <h4 className="text-lg font-medium text-gray-900">Maria Helena {candidates.name}</h4>
          <p className="text-md font-normal text-gray-400">FATEC</p>
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;