import Image from "next/image";
import { useEffect, useState } from "react";
import fetchSelectedCandidates from "../actions/selectedCandidates";
import Cookies from "js-cookie";

function CandidateCard({ candidates }) {
  return (
    <div className="ml-10 rounded-md bg-white p-4 shadow-md hover:shadow-lg ">
      {candidates.map((candidate) => (
        // eslint-disable-next-line react/jsx-key
        <div>
          <div key={candidate.id} className="mt-5 flex items-start gap-2">
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
              <h4 className="text-lg font-medium text-gray-900">
                {candidate.name}
              </h4>
              <p className="text-md font-normal text-gray-400">FATEC</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CandidateCard;
