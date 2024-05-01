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
import BackgroudForm from "@/modules/components/bgForm";

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
    <main className="flex flex-row items-start justify-start">
      <BackgroudForm />
      <div className="w-full h-full">
        <Form
          onSubmit={handleSubmit(handlerFormSubmit)}
          className="lg:mt-10 lg:flex lg:flex-col lg:justify-start lg:px-10 lg:w-full lg:h-full"
        >
          <h2 className="text-2xl font-bold text-[#008037]">Habilidades</h2>
          <h3 className="text-xl font-normal text-[#008037]">Informe suas habilidades</h3>

          <Label className="mt-5 text-xs text-[#008037]">Habilidade 1:</Label>
          <Input
            {...register("hability1")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-5 text-xs text-[#008037]">Habilidade 2:</Label>
          <Input
            {...register("hability2")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-5 text-xs text-[#008037]">Habilidade 3:</Label>
          <Input
            {...register("hability3")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-5 text-xs text-[#008037]">Habilidade 4:</Label>
          <Input
            {...register("hability4")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-5 text-xs text-[#008037]">Habilidade 5:</Label>
          <Input
            {...register("hability5")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <div className="lg:ml-42 lg:flex lg:w-full lg:flex-row lg:justify-between lg:mt-10">
            <Link
              href="/pages/registryCurriculum/experience"
              className="font-normal text-sm flex w-52 items-center justify-center rounded-3xl py-3 bg-[#E3E3E4] text-[#008037] border border-[#008037]"
            >
              Anterior
            </Link>
            <Link
              href="/pages/registryCurriculum/otherInfo"
              className="font-normal text-sm flex w-52 items-center justify-center rounded-3xl py-3 bg-[#008037] text-white border border-[#008037]"
            >
              Próximo
            </Link>
          </div>
        </Form>
      </div>
    </main>
 );
}
