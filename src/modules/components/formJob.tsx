import { Input } from "@/app/components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import createOrUpdateJob from "../actions/createJob-action";

// Defina o esquema de validação para os campos do formulário
const schema = z.object({
  idJob: z.number(),
  jobTitle: z.string().min(3),
  requiredAbilities: z.array(z.string()).min(1),
  desiredExperienceYears: z.number().min(0),
  desiredEducationLevel: z.string().min(1),
  descriptionJob: z.string().min(1),
});

type DataProps = z.infer<typeof schema>;

type JobFormProps = {
  closeModal: () => void;
  selectedJob: any;
  isCreating: any;
};

export default function JobForm({
  closeModal,
  selectedJob,
  isCreating,
}: JobFormProps) {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<DataProps>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const [idJob, setIdJob] = useState<number>(0);

  useEffect(() => {
    if (isCreating || selectedJob) {
      // Preenche os campos com os dados da vaga selecionada
      setValue("jobTitle", selectedJob.jobTitle);
      setValue("requiredAbilities", selectedJob.requiredAbilities.join(","));
      setValue("desiredExperienceYears", selectedJob.desiredExperienceYears);
      setValue("desiredEducationLevel", selectedJob.desiredEducationLevel);
      setValue("descriptionJob", selectedJob.descriptionJob);
    }
  }, [selectedJob, setValue, isCreating]);

  const handlerFormSubmit = (data: DataProps) => {
    const user = Cookies.get("userId");

    if (!user) {
      console.error("userId não encontrado nos cookies");
      return;
    }

    const formData = new FormData();
    const requiredAbilitiesString = [...data.requiredAbilities].join(","); // Join array into string
    const requiredAbilitiesArray = requiredAbilitiesString
      .split(",")
      .map((skill: string) => skill.trim());
    // ...

    // ...

    for (const key in data) {
      let value = data[key as keyof DataProps];
      if (key === "requiredAbilities") {
        value =
          typeof value === "string"
            ? value
                .trim()
                .split(",")
                .map((skill: string) => skill.trim())
            : value;
      }

      // Adicionando ao FormData
      if (typeof value === "string") {
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        // Para arrays, converta-os em strings JSON
        formData.append(key, JSON.stringify(value));
      } else if (typeof value === "number") {
        // Para números, converta-os em strings
        formData.append(key, value.toString());
      }
    }
    formData.append("userId", user as unknown as keyof typeof data);
    formData.append("idJob", idJob.toString()); // E aqui também
    formData.append(
      "requiredAbilities",
      JSON.stringify(requiredAbilitiesArray),
    );
    console.log([...formData.entries()].map(([k, v]) => `${k}: ${v}`)); // Para depuração
    createOrUpdateJob(formData);
    closeModal();
  };

  return (
    <main className="flex h-[100vh] w-[100vw] items-center justify-center ">
      <form
        onSubmit={handleSubmit(handlerFormSubmit)}
        className="lg:mt-8 lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-start lg:px-10"
      >
        <h2 className="text-2xl font-bold text-[#008037]">Cadastro de Vaga</h2>
        <input
          type="hidden"
          name="idJob"
          defaultValue={selectedJob.idJob} // Assumindo que selectedJob contém a vaga selecionada
        />

        <label className="mt-3 text-xs text-[#008037]">Título da Vaga:</label>
        <input
          {...register("jobTitle")}
          type="text"
          className="mb-5 w-5/6 border-b-2 border-[#008037]"
        />
        {errors.jobTitle && <span>{errors.jobTitle.message}</span>}

        <label className="mt-2 text-xs text-[#008037]">
          Habilidades Necessárias (separadas por vírgula):
        </label>
        <input
          {...register("requiredAbilities")}
          type="text"
          className="mb-5 w-5/6 border-b-2 border-[#008037]"
          multiple
        />
        {errors.requiredAbilities && (
          <span>{errors.requiredAbilities.message}</span>
        )}

        <label className="mt-2 text-xs text-[#008037]">
          Anos de Experiência Desejados:
        </label>
        <input
          {...register("desiredExperienceYears", { valueAsNumber: true })}
          type="number"
          className="mb-5 w-5/6 border-b-2 border-[#008037]"
        />
        {errors.desiredExperienceYears && (
          <span>{errors.desiredExperienceYears.message}</span>
        )}

        <label className="mt-2 text-xs text-[#008037]">
          Nível de Escolaridade Desejado:
        </label>
        <input
          {...register("desiredEducationLevel")}
          type="text"
          className="mb-5 w-5/6 border-b-2 border-[#008037]"
        />
        {errors.desiredEducationLevel && (
          <span>{errors.desiredEducationLevel.message}</span>
        )}

        <label className="mt-2 text-xs text-[#008037]">
          Descrição da Vaga:
        </label>
        <input
          {...register("descriptionJob")}
          type="text"
          className="mb-5 w-5/6 border-b-2 border-[#008037]"
        />
        {errors.descriptionJob && <span>{errors.descriptionJob.message}</span>}

        <button
          type="submit"
          className="flex w-52 items-center justify-center rounded-3xl border border-[#008037] bg-[#008037] py-3 text-sm font-normal text-white"
        >
          Salvar
        </button>
      </form>
    </main>
  );
}
