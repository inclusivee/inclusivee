"use client";

import { z } from "zod";
import Form from "./Form";
import Label from "./Label";
import { Input } from "./input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    company: z.string(),
    message: z.string()

});

type DataProps = z.infer<typeof schema>;

export default function Contato({className, props}: any) {
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
    
    console.log(formData);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handlerFormSubmit)}
        className="flex flex-col justify-center "
        >
        <Label className="lg:text-sm text-[#008037] lg:mt-5 text-semibold ">Nome</Label>
        <Input
        
        {...register("name")}
        type="text"
        className="  lg:w-4/6 border-b-2 border-[#008037]"
        />
        <Label className="lg:text-sm text-[#008037] lg:mt-5 text-semibold ">E-mail</Label>
        <Input
        
        {...register("email")}
        type="text"
        className="  lg:w-4/6 border-b-2 border-[#008037]"
        />
        
        <Label className="lg:text-sm text-[#008037] lg:mt-5 text-semibold ">Empresa</Label>
        <Input
        
        {...register("company")}
        type="text"
        className="  lg:w-4/6 border-b-2 border-[#008037] "
        />
        <Label className="lg:text-sm text-[#008037] lg:mt-5 text-semibold ">Assunto</Label>
        <Input
        
        {...register("message")}
        type="text"
        className="  lg:w-4/6 border-b-2 border-[#008037] "
        />

        <button className=" flex w-40 rounded-md h-8 bg-[#008037] mt-10 text-sm justify-center items-center text-white"> Enviar</button>
      </Form>
    </>
  );
}
