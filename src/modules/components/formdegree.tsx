"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import Form from "@/app/components/Form";
import Label from "@/app/components/Label";
import { Input } from "@/app/components/input";
import Button from "@/app/components/Button";
import createEducation from "@/modules/actions/degree-action";

const schema = z.object({
  degree: z.string().min(1),
  institution: z.string().min(1),
  startDateEducation: z.string().min(1),
  endDateEducation: z.string().optional(),
});

type DataProps = z.infer<typeof schema>;
type FormEducationProps = {
  onCloseModal: () => void;
};

export default function FormEducation({ onCloseModal }: FormEducationProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DataProps>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const handleFormEducationSubmit = (data: DataProps) => {
    const user = Cookies.get("userId");
    if (!user) {
      console.error("userId não encontrado nos cookies");
      return;
    }
    const formData = new FormData();

    for (const key in data) {
      const value = data[key as keyof typeof data]?? '';
    formData.append(key, value);
    }
    formData.append("userId", user);
    console.log(formData);
    createEducation(formData);
    console.log(data);
    onCloseModal()
  };

  return (
    <Form
      onSubmit={handleSubmit(handleFormEducationSubmit)}
      className="lg:mt-8 lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-start lg:px-10"
    >
      <h2 className="text-2xl font-bold text-[#008037]">Educação</h2>
      <h3 className="text-md font-normal text-[#008037]">Dados da Formação</h3>

      <Label className="mt-3 text-xs text-[#008037]">Formação:</Label>
      <Input
        {...register("degree")}
        type="text"
        className="mb-5 w-5/6 border-b-2 border-[#008037]"
      ></Input>
      <Label className="mt-2 text-xs text-[#008037]">Instituição:</Label>
      <Input
        {...register("institution")}
        type="text"
        className="mb-5 w-5/6 border-b-2 border-[#008037]"
      ></Input>
      <Label className="mt-2 text-xs text-[#008037]">Início:</Label>
      <Input
        {...register("startDateEducation")}
        type="date"
        className="mb-5 w-5/6 border-b-2 border-[#008037]"
      ></Input>
      <Label className="mt-2 text-xs text-[#008037]">Conclusão:</Label>
      <Input
        {...register("endDateEducation")}
        type="date"
        className="mb-5 w-5/6 border-b-2 border-[#008037]"
      ></Input>
      <Button
        type="submit"
        className="flex w-52 items-center justify-center rounded-3xl border border-[#008037] bg-[#008037] py-3 text-sm font-normal text-white"
      >
        Salvar
      </Button>
    </Form>
  );
}
