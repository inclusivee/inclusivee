"use client";
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import BackgroudForm from "@/modules/components/bgForm";
import createExperience from "@/modules/actions/experience-action";
import Form from "@/app/components/Form";
import Label from "@/app/components/Label";
import { Input } from "@/app/components/input";
import Button from "@/app/components/Button";
import Link from 'next/link';

const schema = z.object({
 company: z.string().min(3),
 office: z.string().min(3),
 startOfWork: z.string().min(1),
 layOff: z.string().min(3),
 currentCompany: z.string(),
 assignmentOfPositions: z.string().min(2),
 phone: z.string().min(1),
});

type DataProps = z.infer<typeof schema>;

export default function FormExperience() {
 const {
    handleSubmit,
    register,
    formState: { errors },
 } = useForm<DataProps>({
    mode: "onBlur",
    resolver: zodResolver(schema),
 });

 const handlerFormSubmit = (data: DataProps) => {
    const user = Cookies.get('userId');
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key as keyof typeof data]);
    }
    formData.append("userId", user as unknown as keyof typeof data);
    console.log(formData);
    createExperience(formData);
 };

 return (
    <main className="flex flex-row items-start justify-start">
      <BackgroudForm />
      <div className="w-full h-full">
        <Form
          onSubmit={handleSubmit(handlerFormSubmit)}
          className="lg:mt-8 lg:flex lg:flex-col lg:justify-start lg:px-10 lg:w-full lg:h-full"
        >
          <h2 className="text-2xl font-bold text-[#008037]">Experiência</h2>
          <h3 className="text-md font-normal text-[#008037]">Dados da Experiência</h3>

          <Label className="mt-3 text-xs text-[#008037]">Nome Empresa:</Label>
          <Input
            {...register("company")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Cargo:</Label>
          <Input
            {...register("office")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Início:</Label>
          <Input
            {...register("startOfWork")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Desligamento:</Label>
          <Input
            {...register("layOff")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Empresa Atual:</Label>
          <Input
            {...register("currentCompany")}
            type="checkbox"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Atribuições do cargo:</Label>
          <textarea
            {...register("assignmentOfPositions")}
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></textarea>
          <div className="lg:ml-42 lg:flex lg:w-full lg:flex-row lg:justify-between lg:mt-5">
            <Link
              href="/pages/registryCurriculum/address"
              className="font-normal text-sm flex w-52 items-center justify-center rounded-3xl py-3 bg-[#E3E3E4] text-[#008037] border border-[#008037]"
            >
              Anterior
            </Link>
            <Button
             /*  href="/pages/registryCurriculum/ability" */
              className="font-normal text-sm flex w-52 items-center justify-center rounded-3xl py-3 bg-[#008037] text-white border border-[#008037]"
            >
              Próximo
            </Button>
          </div>
        </Form>
      </div>
    </main>
 );
}
