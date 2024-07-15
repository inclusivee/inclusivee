"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import createJob from "../actions/createJob-action";

// Defina o esquema de validação para os campos do formulário
const schema = z.object({
  jobTitle: z.string().min(3),
  requiredAbilities: z.string().min(1),
  desiredExperienceYears: z.number().min(0),
  desiredEducationLevel: z.string().min(1),
  descriptionJob: z.string().min(1),
});

type DataProps = z.infer<typeof schema>;

type JobFormProps = {
  closeModal: () => void;
};

export default function FormNewJob({ closeModal }: JobFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DataProps>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const handlerFormSubmit = (data: DataProps) => {
    console.log("FOI");
    const user = Cookies.get("userId");
    if (!user) {
      console.error("userId não encontrado nos cookies");
      return;
    }
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key as keyof typeof data]);
    }
    formData.append("userId", user as unknown as keyof typeof data);
    console.log(formData);
    console.log("Submitted Data:", data);
    createJob(formData);
    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit(handlerFormSubmit)}
      className="lg:mt-8 lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-start lg:px-10"
    >
      <h2 className="text-2xl font-bold text-[#008037]">Cadastro de Vaga</h2>

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

      <label className="mt-2 text-xs text-[#008037]">Descrição da Vaga:</label>
      <input
        {...register("descriptionJob")}
        type="text"
        className="mb-5 w-5/6 border-b-2 border-[#008037] h-10"
      />
      {errors.descriptionJob && <span>{errors.descriptionJob.message}</span>}

      <button
        type="submit"
        className="flex w-52 items-center justify-center rounded-3xl border border-[#008037] bg-[#008037] py-3 text-sm font-normal text-white"
      >
        Criar Vaga
      </button>
    </form>
  );
}
