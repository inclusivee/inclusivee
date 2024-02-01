'use client'
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

  const handlerFormSubmit = (data:any) => {
    console.log(data);
  };
  return (
    <main className="h-[100vh] flex items-center justify-around w-[100vw] ">
      <Form onSubmit={handleSubmit(handlerFormSubmit)} className="flex justify-center  flex-col px-10 py-10 shadow-2xl border border-[#008037]">
        <Label className="text-xs text-[#008037] ">Primeiro Nome:</Label>
        <Input
        {...register("firstName")}
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037]">Sobrenomes:</Label>
        <Input
        {...register("lastName")}
        
          type="text"
          className="border-b-2 border-[#008037] b w-72 mb-5 "
        ></Input>
        <Label className="text-xs text-[#008037]">Data de Nascimento:</Label>
        <Input
          type="date"
          className="border-b-2 border-[#008037] b w-72 mb-5 "
        ></Input>
        <Label className="text-xs text-[#008037]">CPF:</Label>
        <Input
          type="text"
          className="border-b-2 border-[#008037] b w-72 mb-5 "
        ></Input>
        <Label className="text-xs text-[#008037]">Identidade:</Label>
        <Input
          type="text"
          className="border-b-2 border-[#008037] b w-72 mb-5 "
        ></Input>
        <Label className="text-xs text-[#008037]">Nascionalidade:</Label>
        <Input
          type="text"
          className="border-b-2 border-[#008037] b w-72 mb-5 "
        ></Input>
        <Label className="text-xs text-[#008037]">Telefone:</Label>
        <Input
          type="tel"
          className="border-b-2 border-[#008037] b w-72 mb-5 "
        ></Input>
        <div className="flex flex-row justify-end">
        <Link href="/pages/registryCurriculum/address" className="bg-[#008037] rounded-lg text-white flex w-20  items-center justify-center">Proximo</Link>
        </div>
      </Form>
      
      
      
      
    </main>
  );
}
