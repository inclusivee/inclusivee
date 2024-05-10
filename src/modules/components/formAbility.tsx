"use client";
import Form from "@/app/components/Form";
import Label from "@/app/components/Label";
import { Input } from "@/app/components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import createHability from "@/modules/actions/ability-action";
import Link from "next/link";
import { useState } from "react";
import createExperience from "../actions/experience-action";
import Button from '../../app/components/Button';

// Defina o esquema de validação para os campos do formulário
const schema = z.object({
  companyName: z.string().min(3),
  jobTitle: z.string().min(3),
  startDate: z.string().min(1),
  endDate: z.string().min(3),
  isCurrent: z.string(),
  responsibilities: z.string().min(2),
});

type DataProps = z.infer<typeof schema>;

export default function FormExperienceJOB() {
 const {
    handleSubmit,
    register,
    formState: { errors },
 } = useForm<DataProps>({
    mode: "onBlur",
    resolver: zodResolver(schema),
 });

 const handlerFormSubmit = (data: DataProps) => {
  const user = Cookies.get("userId");
  const formData = new FormData();

  for (const key in data) {
    formData.append(key, data[key as keyof typeof data]);
  }
  formData.append("userId", user as unknown as keyof typeof data);
  console.log(formData);
  createExperience(formData);
/*   createEducation(formData); */

};



const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);

const handleOpenExperienceModal = () => {
  setIsExperienceModalOpen(true);
};

const handleCloseExperienceModal = () => {
  setIsExperienceModalOpen(false);
};


 return (
    <main className="h-[100vh] flex items-center justify-center w-[100vw] ">
      <Form
                onSubmit={handleSubmit(handlerFormSubmit)}
                className="lg:mt-8 lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-start lg:px-10"
              >
                <h2 className="text-2xl font-bold text-[#008037]">
                  Experiência
                </h2>
                <h3 className="text-md font-normal text-[#008037]">
                  Dados da Experiência
                </h3>

                <Label className="mt-3 text-xs text-[#008037]">
                  Nome Empresa:
                </Label>
                <Input
                  {...register("companyName")}
                  type="text"
                  className="mb-5 w-5/6 border-b-2 border-[#008037]"
                ></Input>
                <Label className="mt-2 text-xs text-[#008037]">Cargo:</Label>
                <Input
                  {...register("jobTitle")}
                  type="text"
                  className="mb-5 w-5/6 border-b-2 border-[#008037]"
                ></Input>
                <Label className="mt-2 text-xs text-[#008037]">Início:</Label>
                <Input
                  {...register("startDate")}
                  type="date"
                  className="mb-5 w-5/6 border-b-2 border-[#008037]"
                ></Input>
                <Label className="mt-2 text-xs text-[#008037]">
                  Desligamento:
                </Label>
                <Input
                  {...register("endDate")}
                  type="date"
                  className="mb-5 w-5/6 border-b-2 border-[#008037]"
                ></Input>
                <div>
                  <Label className="mt-2 text-xs text-[#008037]">
                    Empresa Atual:
                  </Label>
                  <Input
                    {...register("isCurrent")}
                    type="checkbox"
                    className="ml-2"
                  ></Input>
                </div>
                <Label className="mt-2 text-xs text-[#008037]">
                  Atribuições do cargo:
                </Label>
                <textarea
                  {...register("responsibilities")}
                  className="mb-5 w-5/6 border-b-2 border-[#008037]"
                ></textarea>
                <Button
                  onClose={handleCloseExperienceModal}
                  className="flex w-52 items-center justify-center rounded-3xl border border-[#008037] bg-[#008037] py-3 text-sm font-normal text-white"
                >
                  Salvar
                </Button>
              </Form>
    </main>
 );
}
