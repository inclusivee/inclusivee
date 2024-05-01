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
import createAddress from "@/modules/actions/address-action";

const schema = z.object({
 zipcode: z.string().min(3, "Por favor informe um CEP válido"),
 street: z.string().min(3, "Por favor insira um Rua válido"),
 number: z.string().min(1, "Por favor insira um Número válido"),
 district: z.string().min(3, "Por favor insira um Bairro válido"),
 city: z.string().min(3, "Por favor insira uma Cidade válida"),
 state: z.string().min(2, "Por favor insira um Estado válido"),
 country: z.string().min(1, "Por favor insira um País válido"),
});

type DataProps = z.infer<typeof schema>;

export default function FormAddress() {
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
    createAddress(formData)
 };

 return (
    <main className="flex flex-row items-start justify-start">
      <BackgroudForm />
      <div className="w-full h-full">
        <Form
          onSubmit={handleSubmit(handlerFormSubmit)}
          className="lg:mt-5 lg:flex lg:flex-col lg:justify-start lg:px-10 lg:w-full lg:h-full"
        >
          <h2 className="text-2xl font-bold text-[#008037]">Cadastro</h2>
          <h3 className="text-sm font-normal text-[#008037]">Endereço</h3>

          <Label className="mt-2 text-xs text-[#008037]">CEP:</Label>
          <Input
            {...register("zipcode")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Rua:</Label>
          <Input
            {...register("street")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Número:</Label>
          <Input
            {...register("number")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Bairro:</Label>
          <Input
            {...register("district")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Cidade:</Label>
          <Input
            {...register("city")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">Estado:</Label>
          <Input
            {...register("state")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-2 text-xs text-[#008037]">País:</Label>
          <Input
            {...register("country")}
            type="text"
            className="mb-5 w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <div className=" lg:flex lg:w-full lg:flex-row lg:justify-between lg:mt-10">
            <Link
              href="/pages/registryCompany"
              className="font-normal text-sm flex w-52 items-center justify-center rounded-3xl py-3 bg-[#E3E3E4] text-[#008037] border border-[#008037]"
            >
              Anterior
            </Link>
            <Link
              href="/pages/registryCompany/address"
              className="font-normal text-sm flex w-52 items-center justify-center rounded-3xl py-3 bg-[#008037] text-white border border-[#008037]"
            >
              Salvar
            </Link>
          </div>
        </Form>
      </div>
    </main>
 );
}
