"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Button from "./components/Button";
import { useState } from "react";
import Form from "./components/Form";
import { Input } from "./components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginAccount from "@/modules/actions/login-action";
import { z } from "zod";

const schema = z.object({
  email: z.string().min(3, "Por favor insira um email válido"),
  password: z
    .string()
    .min(6, "Por favor inserir uma senha com mais de 6 caracteres"),
});

type DataProps = z.infer<typeof schema>;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DataProps>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  const handlerFormSubmit = (data: DataProps) => {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key as keyof typeof data]);
    }
    loginAccount(formData);
     setIsModalOpen(false)
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  function Modal({ isOpen, onClose }: any) {
    if (!isOpen) {
      return null;
    }

    return (
      <div className="bg-red fixed inset-0 z-50 flex items-center justify-center">
        <div className=" bg-black bg-opacity-40 p-6 shadow-lg ">
          <main className="flex h-[100vh] w-[100vw] flex-row items-center justify-center">
            <div className="flex flex-col items-center   justify-center border border-[#008037] bg-white px-10 py-10 shadow-2xl">
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
                className="flex flex-col justify-center"
              >
                <Input
                  {...register("email")}
                  type="email"
                  className="mt-4 w-[300px] border-b-2 border-[#008037]"
                  placeholder="Email"
                />
                <Input
                  {...register("password")}
                  type="password"
                  className=" mt-4 w-[300px] border-b-2 border-[#008037] "
                  placeholder="Senha"
                />
                <Link
                  href={"/pages/"}
                  className="mt-4 flex items-end justify-end text-xs text-[#008037] "
                >
                  Esqueci a senha
                </Link>

                <Button
                  href="/pages/registryCurriculum"
                  className="mt-5 flex items-center justify-center rounded-lg bg-[#008037] px-10 py-3 text-white"
                >
                  Acessar
                </Button>
              </Form>
            </div>
            <div className='flex items-start justify-start h-80'>
              <button
                onClick={onClose}
                className="mt-2 rounded bg-red-600 px-4 py-2 text-white ml-1"
              >
                X
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/assets/image/logo-inclusivee.png"
          type="image/x-icon"
        />
      </head>
      <body>
        <header className="flex items-center justify-between bg-white shadow-xl sm:px-10 sm:py-2">
          <Link href={"/"}>
            <Image
            id='logo_header'
              src="/assets/image/Logo.png"
              alt="Logo Inclusivee"
              width={200}
              height={0}
              className="ml-2"
            />
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault(); // Impede a navegação padrão
              setIsModalOpen(true); // Abre o modal
            }}
            className="md:px10 mr-3 flex h-7 items-center justify-center rounded bg-[#008037] px-5 py-1 text-sm text-white sm:text-lg md:h-auto md:px-10 md:py-3 md:text-2xl lg:rounded-lg"
          >
            Acessar
          </button>
        </header>

        <main className="relative">{children}</main>
            {/* Renderização do Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </body>
    </html>
  );
}
