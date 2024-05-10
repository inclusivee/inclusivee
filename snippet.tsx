"use client";
import React, { useState, useEffect } from "react";
// ... outras importações ...

// Assumindo que você tem a função getUser e userId disponível
import getUser from "./path/to/getUser"; // Substitua pelo caminho real

export default function FormExperience({ userId }) {
  // Recebe userId como um prop
  // ... (Componentes ExperienceCard e EducationCard) ...

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser({ userId, includeRelations: true });
      setUser(userData);
    };

    fetchData();
  }, [userId]); // Busca dados quando o userId muda

  // ... (Lógica de manipulação de Modal) ...

  return (
    <main className="flex flex-row items-start justify-start">
      {/* ... outros componentes ... */}

      {user && ( // Renderiza apenas se os dados do usuário estiverem disponíveis
        <div className="lg:mt-8 lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-start lg:px-10">
          {/* ... outro conteúdo ... */}

          {/* Seção de Experiências */}
          <div>
            <h3 className="text-sm font-normal text-[#008037]">
              Experiências profissionais
            </h3>
            {user.Experience.map((experience) => (
              <ExperienceCard
                key={experience.idExperience}
                companyName={experience.companyName}
                jobTitle={experience.jobTitle}
                startDate={experience.startDate}
                endDate={experience.endDate}
              />
            ))}
          </div>

          {/* Seção de Educação */}
          <div>
            <h3 className="text-sm font-normal text-[#008037]">
              Formação Acadêmica
            </h3>
            {user.Education.map((education) => (
              <EducationCard
                key={education.idEducation}
                degree={education.degree}
                institution={education.institution}
                startDateEducation={education.startDateEducation}
                endDateEducation={education.endDateEducation}
              />
            ))}
          </div>

          {/* ... outro conteúdo ... */}
        </div>
      )}
    </main>
  );
}
