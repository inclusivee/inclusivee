"use client";
import React, { useState, } from "react";
import { useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import BackgroudForm from "@/modules/components/bgForm";
import createExperience from "@/modules/actions/experience-action";
import Form from "@/app/components/Form";
import Label from "@/app/components/Label";
import { Input } from "@/app/components/input";
import Button from "@/app/components/Button";
import Link from "next/link";
import Modal from "react-modal";

const schema = z.object({
  company: z.string().min(3),
  office: z.string().min(3),
  startOfWork: z.string().min(1),
  layOff: z.string().min(3),
  currentCompany: z.string(),
  assignmentOfPositions: z.string().min(2),
  phone: z.string().min(1),
  education: z.string().min(1),
  institution:z.string().min(1),
  startOfEducation:z.string().min(1),
  endOfEducation:z.string().min(1),
  currentlyStudying:z.string().min(1),
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
    const user = Cookies.get("userId");
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key as keyof typeof data]);
    }
    formData.append("userId", user as unknown as keyof typeof data);
    console.log(formData);
    createExperience(formData);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex flex-row items-start justify-start">
      <BackgroudForm />
      <div className="h-full w-full">
        <div
          onSubmit={handleSubmit(handlerFormSubmit)}
          className="lg:mt-8 lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-start lg:px-10"
        >
          <h2 className="text-2xl font-bold text-[#008037]">Cadastro</h2>
          <h3 className="text-md font-normal text-[#008037]">
            Informações profissionais
          </h3>

          <div className="lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-sm font-normal text-[#008037]">
              Experiências profissionais
            </h3>
            <div
              onClick={handleOpenModal}
              className="text-sm font-normal text-[#008037]"
            >
              + Adicionar Nova Experiência
            </div>

            <Modal isOpen={isModalOpen}>
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
                  type="date"
                  className="mb-5 w-5/6 border-b-2 border-[#008037]"
                ></Input>
                <Label className="mt-2 text-xs text-[#008037]">
                  Desligamento:
                </Label>
                <Input
                  {...register("layOff")}
                  type="date"
                  className="mb-5 w-5/6 border-b-2 border-[#008037]"
                ></Input>
                <div>
                  <Label className="mt-2 text-xs text-[#008037]">
                    Empresa Atual:
                  </Label>
                  <Input
                    {...register("currentCompany")}
                    type="checkbox"
                    className="mb-5"
                  ></Input>
                </div>
                <Label className="mt-2 text-xs text-[#008037]">
                  Atribuições do cargo:
                </Label>
                <textarea
                  {...register("assignmentOfPositions")}
                  className="mb-5 w-5/6 border-b-2 border-[#008037]"
                ></textarea>
                <Button
                  onClose={handleCloseModal}
                  className="flex w-52 items-center justify-center rounded-3xl border border-[#008037] bg-[#008037] py-3 text-sm font-normal text-white"
                >
                  Salvar
                </Button>
              </Form>
            </Modal>
          </div>
          <div className="lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-sm font-normal text-[#008037]">
              Experiências profissionais
            </h3>
            <div
              onClick={handleOpenModal}
              className="text-sm font-normal text-[#008037]"
            >
              + Adicionar Nova Experiência
            </div>

            <Modal isOpen={isModalOpen}>
              <Form
                onSubmit={handleSubmit(handlerFormSubmit)}
                className="lg:mt-8 lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-start lg:px-10"
              >
                <h2 className="text-2xl font-bold text-[#008037]">Educação</h2>
                <h3 className="text-md font-normal text-[#008037]">
                  Dados da Formação
                </h3>

                <Label className="mt-3 text-xs text-[#008037]">Formação:</Label>
                <Input
                  {...register("education")}
                  type="text"
                  className="mb-5 w-5/6 border-b-2 border-[#008037]"
                ></Input>
                <Label className="mt-2 text-xs text-[#008037]">
                  Instituição:
                </Label>
                <Input
                  {...register("institution")}
                  type="text"
                  className="mb-5 w-5/6 border-b-2 border-[#008037]"
                ></Input>
                <Label className="mt-2 text-xs text-[#008037]">Início:</Label>
                <Input
                  {...register("startOfEducation")}
                  type="date"
                  className="mb-5 w-5/6 border-b-2 border-[#008037]"
                ></Input>
                <Label className="mt-2 text-xs text-[#008037]">
                  Conclusão:
                </Label>
                <Input
                  {...register("endOfEducation")}
                  type="date"
                  className="mb-5 w-5/6 border-b-2 border-[#008037]"
                ></Input>
                <Label className="mt-2 text-xs text-[#008037]">
                  Atualmente cursando:
                </Label>
                <Input
                  {...register("currentlyStudying")}
                  type="checkbox"
                  className="mb-5"
                ></Input>
                <Button
                  onClose={handleCloseModal}
                  className="flex w-52 items-center justify-center rounded-3xl border border-[#008037] bg-[#008037] py-3 text-sm font-normal text-white"
                >
                  Salvar
                </Button>
              </Form>
            </Modal>
          </div>

          <div className="lg:ml-42 lg:mt-5 lg:flex lg:w-full lg:flex-row lg:justify-between">
            <Link
              href="/pages/registryCurriculum/address"
              className="flex w-52 items-center justify-center rounded-3xl border border-[#008037] bg-[#E3E3E4] py-3 text-sm font-normal text-[#008037]"
            >
              Anterior
            </Link>
            <Link
              href="/pages/registryCurriculum/ability"
              className="flex w-52 items-center justify-center rounded-3xl border border-[#008037] bg-[#008037] py-3 text-sm font-normal text-white"
            >
              Próximo
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
