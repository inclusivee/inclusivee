"use client";
import Form from "@/app/components/Form";
import Label from "@/app/components/Label";
import { Input } from "@/app/components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import createCandiateProfile from "@/modules/actions/profile-actions";
import Link from "next/link";
import BackgroudForm from "@/modules/components/bgForm";

const schema = z.object({
  nameCompany: z.string().min(3),
  nameTrading: z.string().min(1),
  email: z.string().min(3),
  phone: z.string().min(3),
  cnpj: z.string().min(1),
  state: z.string().min(1),

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
    createCandiateProfile(formData);
  };

  return (
    <main className=" flex flex-row  items-start justify-start  ">
      <BackgroudForm />
      <div className="h-full w-full">
        <Form
          onSubmit={handleSubmit(handlerFormSubmit)}
          className="lg:mt-10 lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-start lg:px-10"
        >
          <h2 className="text-2xl font-bold text-[#008037]">Cadastro</h2>
          <h3 className="text-xl font-normal text-[#008037]">Dados Empresariais</h3>

          <Label className="mt-5 text-xs text-[#008037]">Razão Social</Label>
          <Input
            {...register("nameCompany")}
            type="text"
            className="  w-5/6 border-b-2 border-[#008037]"
          ></Input>
          <Label className="mt-5 text-xs text-[#008037]">Nome Fantasia</Label>
          <Input
            {...register("nameTrading")}
            type="text"
            className=" w-5/6 border-b-2 border-[#008037] "
          ></Input>
          <Label className="mt-5 text-xs text-[#008037]">Email</Label>
          <Input
            {...register("email")}
            type="text"
            className=" w-5/6 border-b-2 border-[#008037] "
          ></Input>
          <Label className="mt-5 text-xs text-[#008037]">
            Telefone
          </Label>
          <Input
            {...register("phone")}
            type="date"
            className=" w-5/6 border-b-2 border-[#008037] "
          ></Input>
          <Label className="mt-5 text-xs text-[#008037]">CNPJ</Label>
          <Input
            {...register("cnpj")}
            type="tel"
            className=" mb-5 w-5/6 border-b-2 border-[#008037] "
          ></Input>
          <Label className="mt-5 text-xs text-[#008037]">Estado</Label>
          <Input
            {...register("state")}
            type="tel"
            className=" mb-5 w-5/6 border-b-2 border-[#008037] "
          ></Input>
          <div className="lg:ml-42 lg:mt-10 lg:flex lg:w-full lg:flex-row  lg:justify-end">
            <Link
              href="/pages/registryCompany/address"
              className=" flex w-52  items-center justify-center rounded-3xl bg-[#35693E] py-3 text-sm   font-normal text-white"
            >
              PRÓXIMO
            </Link>
          </div>
        </Form>
      </div>
    </main>
  );
}
