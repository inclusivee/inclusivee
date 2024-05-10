"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import BackgroudForm from "@/modules/components/bgForm";
import createExperience from "@/modules/actions/experience-action";
import Form from "@/app/components/Form";
import Label from "@/app/components/Label";
import { Input } from "@/app/components/input/Input";
import Button from "@/app/components/Button";

const schema = z.object({
  companyName: z.string().min(3),
  jobTitle: z.string().min(3),
  startDate: z.string(),
  endDate: z.string().optional(),
  responsibilities: z.string().min(2),
});

type DataProps = z.infer<typeof schema>;
type FormExperienceProps = {
  onCloseModal: () => void;
};

export default function FormExperience({ onCloseModal }: FormExperienceProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DataProps>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const handlerFormSubmit = async (data: DataProps) => {
    const user = Cookies.get("userId");

    if (!user) {
      console.error("userId não encontrado nos cookies");
      return;
    }
    const formData = new FormData();

    for (const key in data) {
      const value = data[key as keyof typeof data] ?? "";
      formData.append(key, value);
    }
    formData.append("userId", user as unknown as keyof typeof data);
    console.log(formData);
    createExperience(formData);
    onCloseModal();
  };

  return (
    <Form
      onSubmit={handleSubmit(handlerFormSubmit)}
      className="lg:mt-8 lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-start lg:px-10"
    >
      <h2 className="text-2xl font-bold text-[#008037]">Experiência</h2>
      <h3 className="text-md font-normal text-[#008037]">
        Dados da Experiência
      </h3>

      <Label className="mt-3 text-xs text-[#008037]">Nome Empresa:</Label>
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
      <Label className="mt-2 text-xs text-[#008037]">Desligamento:</Label>
      <Input
        {...register("endDate")}
        type="date"
        className="mb-5 w-5/6 border-b-2 border-[#008037]"
      ></Input>
      <Label className="mt-2 text-xs text-[#008037]">
        Atribuições do cargo:
      </Label>
      <textarea
        {...register("responsibilities")}
        className="mb-5 w-5/6 border-b-2 border-[#008037]"
      ></textarea>
      <Button
        type="submit"
        className="flex w-52 items-center justify-center rounded-3xl border border-[#008037] bg-[#008037] py-3 text-sm font-normal text-white"
      >
        Salvar
      </Button>
    </Form>
  );
}
