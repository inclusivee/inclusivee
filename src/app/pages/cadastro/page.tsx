"use client";
import Button from "@/app/components/Button";
import Form from "@/app/components/Form";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import createAccount from "@/modules/auth/actions/auth-action";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/components/input";
import Cookies from "js-cookie";

const schema = z.object({
  name: z.string().min(3, "Por favor informe um nome válido"),
  email: z.string().min(3, "Por favor insira um email válido"),
  password: z
    .string()
    .min(6, "Por favor inserir uma senha com mais de 6 caracteres"),
});

type DataProps = z.infer<typeof schema>;

export default function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DataProps>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const handlerFormSubmit = (data: DataProps) => {
    const cookieValue = Cookies.get("typeUser");

    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.append("typeUser", cookieValue);
    console.log(formData);
    createAccount(formData); // Passa o FormData diretamente para createAccount
    
  };

  console.log(errors);
  return (
    <main className="flex h-[100vh] w-[100vw] items-center justify-center ">
      <Form
        onSubmit={handleSubmit(handlerFormSubmit)}
        className=" justify-center flex flex-col border border-[#008037] px-10 py-10 shadow-2xl"
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
          {...register("name")}
          type="text"
          placeholder="Nome Completo"
          className="mb-5 w-72 border-b-2 border-[#008037]"
        />
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

        <Button
          type="submit"
          className="mt-5 flex items-center justify-center rounded-lg bg-[#008037] px-10 py-3 text-white"
        >
          Cadastrar
        </Button>
      </Form>
    </main>
  );
}
