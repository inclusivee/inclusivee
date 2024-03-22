"use client";
import Form from "@/app/components/Form";
import Link from "next/link";
import Label from "@/app/components/Label";
import {Input} from "@/app/components/input";
import Image from "next/image";
import Button from "@/app/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import createCandiateProfile from "@/modules/auth/actions/profile-actions";



const schema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  birthday: z.string().min(1),
  cpf: z.string().min(3),
  rg: z.string().min(3),
  nationality: z.string().min(2),
  phone: z.string().min(1),
});

type DataProps = z.infer<typeof schema>;



export default function RegistryCurriculum() {
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
    formData.append("userId", user as unknown as keyof typeof data)
    console.log(formData); 
    createCandiateProfile(formData)
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
        {...register("birthday")}
          type="date"
          className=" mb-5 w-72 border-b-2 border-[#008037] "
        ></Input>
        <Label className="text-xs text-[#008037]">CPF:</Label>
        <Input
        {...register("cpf")}
          type="text"
          className=" mb-5 w-72 border-b-2 border-[#008037] "
        ></Input>
        <Label className="text-xs text-[#008037]">Identidade:</Label>
        <Input
        {...register("rg")}

          type="text"
          className=" mb-5 w-72 border-b-2 border-[#008037] "
        ></Input>
        <Label className="text-xs text-[#008037]">Nascionalidade:</Label>
        <Input
        {...register("nationality")}
        
          type="text"
          className=" mb-5 w-72 border-b-2 border-[#008037] "
        ></Input>
        <Label className="text-xs text-[#008037]">Telefone:</Label>
        <Input
        {...register("phone")}
        
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
