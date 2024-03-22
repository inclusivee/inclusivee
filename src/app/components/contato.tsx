"use client";

import { z } from "zod";
import Form from "./Form";
import Label from "./Label";
import { Input } from "./input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    subject: z.string(),
    email: z.string().email(),
    message: z.string()
});

type DataProps = z.infer<typeof schema>;

export default function Contato(props: any) {
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
        className="flex flex-col justify-center  "
        >
        <Label className="lg:text-lg text-[#008037] lg:mt-5 text-semibold ">Assunto</Label>
        <Input
        
        {...register("subject")}
        type="text"
        className="mb-5  lg:w-3/6 border-b-2 border-[#008037]"
        />
        <Label className="lg:text-lg text-[#008037] lg:mt-5 text-semibold ">E-mail</Label>
        <Input
        
        {...register("email")}
        type="text"
        className="mb-5  lg:w-3/6 border-b-2 border-[#008037]"
        />
        <Label className="lg:text-lg text-[#008037] lg:mt-5 text-semibold ">Mensagem</Label>
        <Input
        
        {...register("message")}
        type="text"
        className="mb-5  lg:w-3/6 border-b-2 border-[#008037] "
        />
      </Form>
    </>
  );
}
