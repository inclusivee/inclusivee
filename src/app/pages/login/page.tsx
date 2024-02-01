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
};

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const handlerFormSubmit = (data:any) => {
    console.log(data);
  };
  return (
    <div>
      <main className="flex h-[100vh] w-[100vw] flex-col items-center justify-center">
        <div className="flex flex-col items-center  justify-center  border border-[#008037] px-10 py-10 shadow-2xl">
          <Link href={"../"} className="">
            <Image
              src="/assets/image/Logo.png"
              alt="Logo Inclusivee"
              width={200}
              height={0}
            />
          </Link>
          <Form
            onSubmit={handleSubmit(handlerFormSubmit)}
            className="flex flex-col  justify-center"
          >
            <Input
              {...register("email")}
              type="email"
              className="mt-4  w-[300px] border-b-2 border-[#008037]"
              placeholder="Email"
            />
            <Input
              {...register("password")}
              type="email"
              className=" mt-4 w-[300px] border-b-2 border-[#008037] "
              placeholder="Senha"
            />
            <Link
              href={"/pages/"}
              className="flex items-end justify-end text-xs text-[#008037] mt-4 "
            >
              Esqueci a senha
            </Link>

              <Link
                href="/pages/registryCurriculum"
                className="flex items-center justify-center mt-5 rounded-lg bg-[#008037] px-10 py-3 text-white"
              >Acessar</Link>
              
            
          </Form>
        </div>
      </main>
    </div>
  );
}
