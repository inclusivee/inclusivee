"use client";

import Button from "@/app/components/Button";
import Form from "@/app/components/Form";
import Input from "@/app/components/Input";
import Label from "@/app/components/Label";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  validatePassword: string;
};

export default function RegistryUser() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const handlerFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main className="flex h-[100vh] w-[100vw] items-center justify-center ">
      <Form
        onSubmit={handleSubmit(handlerFormSubmit)}
        className="flex flex-col  justify-center border border-[#008037] px-10 py-10 shadow-2xl"
      >
        <Link href={"/"} className="">
          <Image
            src="/assets/image/Logo.png"
            alt="Logo Inclusivee"
            width={200}
            height={0}
          />
        </Link>
        <Input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="mb-5 w-72 border-b-2 border-[#008037]"
        />
        <Input
          {...register("password")}
          placeholder="Senha"
          type="password"
          className=" mb-5 w-72 border-b-2 border-[#008037]"
        />
        <Input
          {...register("validatePassword")}
          placeholder="Repita a Senha"
          type="password"
          className=" mb-5 w-72 border-b-2 border-[#008037]"
        />
        <Link href={"/pages/home"} className="flex items-center justify-center">
          <Button className="mt-5 rounded-lg bg-[#008037] px-10 py-3 text-white">
            Cadastrar
          </Button>
        </Link>
      </Form>
    </main>
  );
}
