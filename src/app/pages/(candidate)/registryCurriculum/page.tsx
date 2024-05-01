"use client";
import Form from "@/app/components/Form";
import Label from "@/app/components/Label";
import { Input } from "@/app/components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import Link from "next/link";
import BackgroudForm from "@/modules/components/bgForm";
import createOrUpdateCandidateProfile from "@/modules/actions/profile-actions";
import Button from "@/app/components/Button";

const schema = z.object({
  fullName: z.string().min(3),
  birthday: z.string().min(1),
  cpf: z.string().min(3),
  rg: z.string().min(3),
  phone: z.string().min(1),
});

type DataProps = z.infer<typeof schema>;

export default function RegistryCurriculum(className: any) {
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
    createOrUpdateCandidateProfile(formData);
  };

  return (
    <main className=" flex flex-row  items-start justify-start  ">
      <BackgroudForm />
      <div className="w-full h-full">
      <Form
        onSubmit={handleSubmit(handlerFormSubmit)}
        className="lg:mt-10 lg:flex lg:flex-col lg:justify-start lg:px-10 lg:w-full lg:h-full" 
      >
        <h2 className="text-2xl font-bold text-[#008037]">Cadastro</h2>
        <h3 className="text-md font-normal text-[#008037]">Dados pessoais</h3>

        <Label className="mt-5 text-xs text-[#008037]">Nome:</Label>
        <Input
          {...register("fullName")}
          type="text"
          className="  w-5/6 border-b-2 border-[#008037]"
        ></Input>
        <Label className="mt-5 text-xs text-[#008037]">CPF:</Label>
        <Input
          {...register("cpf")}
          type="text"
          className=" w-5/6 border-b-2 border-[#008037] "
        ></Input>
        <Label className="mt-5 text-xs text-[#008037]">RG:</Label>
        <Input
          {...register("rg")}
          type="text"
          className=" w-5/6 border-b-2 border-[#008037] "
        ></Input>
        <Label className="mt-5 text-xs text-[#008037]">
          Data de Nascimento:
        </Label>
        <Input
          {...register("birthday")}
          type="date"
          className=" w-5/6 border-b-2 border-[#008037] "
        ></Input>
        <Label className="mt-5 text-xs text-[#008037]">Telefone:</Label>
        <Input
          {...register("phone")}
          type="tel"
          className=" mb-5 w-5/6 border-b-2 border-[#008037] "
        ></Input>
         <div className="lg:ml-42 lg:flex lg:w-full lg:flex-row lg:justify-end  lg:mt-10">
        <Button
          /* href="/pages/registryCurriculum/address" */
          className=" font-normal text-sm  flex w-52 items-center justify-center rounded-3xl py-3   bg-[#35693E] text-white"
        >
          PRÓXIMO
        </Button>
      </div>
      </Form>
     
      </div>
    </main>
  );
}
