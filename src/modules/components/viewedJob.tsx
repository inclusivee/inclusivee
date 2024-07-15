import React from 'react';

type JobViewProps = {
    jobDetails: {
    idJob: number;
    jobTitle: string;
    requiredAbilities: string[];
    desiredExperienceYears: number;
    desiredEducationLevel: string;
    descriptionJob: string;
    active:boolean;
  };
};

const ViewedJob: React.FC<JobViewProps> = ({ jobDetails }) => {
  return (
    <div className="job-view-container">
      <h2 className="text-2xl font-bold text-[#008037] mb-4">Detalhes da Vaga</h2>

      <div className="job-detail">
        <strong>Título da Vaga:</strong>
        <p>{jobDetails.jobTitle}</p>
      </div>

      <div className="job-detail">
        <strong>Habilidades Necessárias:</strong>
        <ul>
          {jobDetails.requiredAbilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      </div>

      <div className="job-detail">
        <strong>Anos de Experiência Desejados:</strong>
        <p>{jobDetails.desiredExperienceYears}</p>
      </div>

      <div className="job-detail">
        <strong>Nível de Escolaridade Desejado:</strong>
        <p>{jobDetails.desiredEducationLevel}</p>
      </div>

      <div className="job-detail">
        <strong>Descrição da Vaga:</strong>
        <p>{jobDetails.descriptionJob}</p>
      </div>
    </div>
  );
};

export default ViewedJob;
