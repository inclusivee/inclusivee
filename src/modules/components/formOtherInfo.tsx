"use client";
import Form from "@/app/components/Form";
import Label from "@/app/components/Label";
import { Input } from "@/app/components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import createOtherInfo from "@/modules/actions/otherInfo-action";
import Link from "next/link";

// Defina o esquema de validação para os campos do formulário
const schema = z.object({
 escolaridade: z.string().min(1),
 cursosLivres: z.string().min(1),
 idiomas: z.string().min(1),
 regimeContrato:z.string().min(1),
 regimeTrabalho: z.string().min(1),
});

type DataProps = z.infer<typeof schema>;

export default function OtherInfo() {
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
    createOtherInfo(formData);
 };

 return (
    <main className="h-[100vh] flex items-center justify-center w-[100vw] ">
      <Form
        onSubmit={handleSubmit(handlerFormSubmit)}
        className="flex justify-center flex-col px-10 py-10 shadow-2xl border border-[#008037]"
      >
        <Label className="text-xs text-[#008037] ">Escolaridade:</Label>
        <Input
          {...register("escolaridade")}
          type="text"
          className="border-b-2 border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Cursos livres:</Label>
        <Input
          {...register("cursosLivres")}
          type="text"
          className="border-b-2 border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Idiomas:</Label>
        <Input
          {...register("idiomas")}
          type="text"
          className="border-b-2 border-[#008037] w-72 mb-5"
        ></Input>
        <fieldset className="text-xs text-[#008037] ">Regime de Contrato:</fieldset>
        <div>
          <Input
            {...register("regimeContrato")}
            type="checkbox"
            className="border-b-2 border-[#008037]"
            value="CLT"
          ></Input>
          <Label className="text-xs text-[#008037] ml-4">CLT</Label>
        </div>
        <div>
          <Input
            {...register("regimeContrato")}
            type="checkbox"
            className="border-b-2 border-[#008037]"
            value="PJ"
          ></Input>
          <Label className="text-xs text-[#008037] ml-4">PJ</Label>
        </div>
        <div>
          <Input
            {...register("regimeContrato")}
            type="checkbox"
            className="border-b-2 border-[#008037]"
            value="Freelance"
          ></Input>
          <Label className="text-xs text-[#008037] ml-4">Freelance</Label>
        </div>
        <fieldset className="text-xs text-[#008037] ">Regime de Trabalho:</fieldset>
        <div>
          <Input
            {...register("regimeTrabalho")}
            type="checkbox"
            className="border-b-2 border-[#008037]"
            value="Remoto"
          ></Input>
          <Label className="text-xs text-[#008037] ml-4">Remoto</Label>
        </div>
        <div>
          <Input
            {...register("regimeTrabalho")}
            type="checkbox"
            className="border-b-2 border-[#008037]"
            value="Hibrido"
          ></Input>
          <Label className="text-xs text-[#008037] ml-4">Hibrido</Label>
        </div>
        <div>
          <Input
            {...register("regimeTrabalho")}
            type="checkbox"
            className="border-b-2 border-[#008037]"
            value="Presencial"
          ></Input>
          <Label className="text-xs text-[#008037] ml-4">Presencial</Label>
        </div>
        <div className="flex justify-between">
          <Link
            href="/pages/registryCurriculum/hability"
            className="flex w-20 items-center justify-center rounded-lg bg-[#E3E3E4] text-zinc-700"
          >
            Anterior
          </Link>
          <Link
            href="/pages/homeCandidate"
            className="flex w-20 items-center justify-center rounded-lg bg-[#008037] text-white"
          >
            Enviar
          </Link>
        </div>
      </Form>
    </main>
 );
}
