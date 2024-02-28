"use client";
import Button from "@/app/components/Button";
import Form from "@/app/components/Form";
import Label from "@/app/components/Label";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import loginAccount from "@/modules/auth/actions/login-action";
import { Input } from "@/app/components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  email: z.string().min(3, "Por favor insira um email válido"),
  password: z
    .string()
    .min(6, "Por favor inserir uma senha com mais de 6 caracteres"),
});

type DataProps = z.infer<typeof schema>;


export default function Login() {
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
      </main>
    </div>
  );
}
