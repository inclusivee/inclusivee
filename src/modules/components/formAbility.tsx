"use client";
import Form from "@/app/components/Form";
import Label from "@/app/components/Label";
import { Input } from "@/app/components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import createHability from "@/modules/actions/ability-action";
import Link from "next/link";

// Defina o esquema de validação para os campos do formulário
const schema = z.object({
 hability1: z.string().min(1),
 hability2: z.string().min(1),
 hability3: z.string().min(1),
 hability4: z.string().min(1),
 hability5: z.string().min(1),
});

type DataProps = z.infer<typeof schema>;

export default function Hability() {
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
    createHability(formData);
 };

 return (
    <main className="h-[100vh] flex items-center justify-center w-[100vw] ">
      <Form
        onSubmit={handleSubmit(handlerFormSubmit)}
        className="flex justify-center flex-col px-10 py-10 shadow-2xl border border-[#008037]"
      >
        <Label className="text-xs text-[#008037] ">Habilidade 1:</Label>
        <Input
          {...register("hability1")}
          type="text"
          className="border-b-2 border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Habilidade 2:</Label>
        <Input
          {...register("hability2")}
          type="text"
          className="border-b-2 border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Habilidade 3:</Label>
        <Input
          {...register("hability3")}
          type="text"
          className="border-b-2 border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Habilidade 4:</Label>
        <Input
          {...register("hability4")}
          type="text"
          className="border-b-2 border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Habilidade 5:</Label>
        <Input
          {...register("hability5")}
          type="text"
          className="border-b-2 border-[#008037] w-72 mb-5"
        ></Input>
        <div className="flex justify-between">
          <Link
            href="/pages/registryCurriculum/experience"
            className="flex w-20 items-center justify-center rounded-lg bg-[#E3E3E4] text-zinc-700"
          >
            Anterior
          </Link>
          <Link
            href="/pages/registryCurriculum/otherInfo"
            className="flex w-20 items-center justify-center rounded-lg bg-[#008037] text-white"
          >
            Próximo
          </Link>
        </div>
      </Form>
    </main>
 );
}
