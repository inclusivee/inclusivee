"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import Form from "@/app/components/Form";
import Label from "@/app/components/Label";
import { Input } from "@/app/components/input";
import BackgroudForm from "@/modules/components/bgForm";
import Link from "next/link";
import createOtherInfo from "@/modules/actions/otherInfo-action"; // Supondo que você tenha uma action para criar informações adicionais

const otherInfoSchema = z.object({
  escolaridade: z.string().min(1, "Por favor insira uma Escolaridade válida"),
  cursosLivres: z.string().min(1, "Por favor insira um Curso livre válido"),
  idiomas: z.string().min(1, "Por favor insira um Idioma válido"),
  regimeContrato: z
    .string()
    .min(1, "Por favor selecione um Regime de Contrato"),
  regimeTrabalho: z
    .string()
    .min(1, "Por favor selecione um Regime de Trabalho"),
});

type OtherInfoData = z.infer<typeof otherInfoSchema>;

export default function OtherInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OtherInfoData>({
    mode: "onBlur",
    resolver: zodResolver(otherInfoSchema),
  });

  const onSubmit = (data: OtherInfoData) => {
    const user = Cookies.get("userId");
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key as keyof typeof data]);
    }
    formData.append("userId", user as unknown as keyof typeof data);

    createOtherInfo(formData);
  };

  return (
    <main className="flex flex-row items-start justify-start">
      <BackgroudForm />
      <div className="h-full w-full">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:mt-8 lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-start lg:px-10"
        >
          <h2 className="text-2xl font-bold text-[#008037]">
            Informações Adicionais
          </h2>
          <h3 className="text-md font-normal text-[#008037]">
            Dados Adicionais
          </h3>

          <Label className="mt-3 text-xs text-[#008037]">Escolaridade:</Label>
          <Input
            {...register("escolaridade")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Cursos livres:</Label>
          <Input
            {...register("cursosLivres")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Idiomas:</Label>
          <Input
            {...register("idiomas")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <div className="lg:ml-42 lg:mt-5 lg:flex lg:w-full lg:flex-row lg:justify-between">
            <Link
              href="/pages/registryCurriculum/ability"
              className="flex w-52 items-center justify-center rounded-3xl border border-[#008037] bg-[#E3E3E4] py-3 text-sm font-normal text-[#008037]"
            >
              Anterior
            </Link>
            <Link
              href="/pages/homeCandidato"
              className="flex w-52 items-center justify-center rounded-3xl border border-[#008037] bg-[#008037] py-3 text-sm font-normal text-white"
            >
              Enviar
            </Link>
          </div>
        </Form>
      </div>
    </main>
  );
}
