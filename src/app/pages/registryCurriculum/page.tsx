"use client";
import Form from "@/app/components/Form";
import Link from "next/link";
import Label from "@/app/components/Label";
import Input from "@/app/components/Input";
import Image from "next/image";
import Button from "@/app/components/Button";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};

export default function RegistryCurriculum() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const handlerFormSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <main className="flex h-[100vh] w-[100vw] items-center justify-around ">
      <Form
        onSubmit={handleSubmit(handlerFormSubmit)}
        className="flex flex-col  justify-center border border-[#008037] px-10 py-10 shadow-2xl"
      >
        <Label className="text-xs text-[#008037] ">Primeiro Nome:</Label>
        <Input
          {...register("firstName")}
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
          id="primeiro_nome"
        ></Input>
        <Label className="text-xs text-[#008037]">Sobrenomes:</Label>
        <Input
          {...register("lastName")}
          type="text"
          className=" mb-5 w-72 border-b-2 border-[#008037] "
        ></Input>
        <Label className="text-xs text-[#008037]">Data de Nascimento:</Label>
        <Input
          type="date"
          className=" mb-5 w-72 border-b-2 border-[#008037] "
        ></Input>
        <Label className="text-xs text-[#008037]">CPF:</Label>
        <Input
          type="text"
          className=" mb-5 w-72 border-b-2 border-[#008037] "
        ></Input>
        <Label className="text-xs text-[#008037]">Identidade:</Label>
        <Input
          type="text"
          className=" mb-5 w-72 border-b-2 border-[#008037] "
        ></Input>
        <Label className="text-xs text-[#008037]">Nascionalidade:</Label>
        <Input
          type="text"
          className=" mb-5 w-72 border-b-2 border-[#008037] "
        ></Input>
        <Label className="text-xs text-[#008037]">Telefone:</Label>
        <Input
          type="tel"
          className=" mb-5 w-72 border-b-2 border-[#008037] "
        ></Input>
        <div className="flex flex-row justify-end">
          <Link
            href="/pages/registryCurriculum/address"
            className="flex w-20 items-center justify-center rounded-lg  bg-[#008037] text-white"
          >
            Proximo
          </Link>
        </div>
      </Form>
    </main>
  );
}
