'use client'
import Form from "@/app/components/Form";
import { Input } from "@/app/components/input";
import Label from "@/app/components/Label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../../app/components/Button";
import createAddress from "@/modules/actions/address-action";
import Cookies from "js-cookie";
import Link from "next/link";



const schema = z.object({
  zipcode: z.string().min(3, "Por favor informe um CEP válido"),
  street: z.string().min(3, "Por favor insira um Rua válido"),
  number: z.string().min(1, "Por favor insira um Rua válido"),
  district: z.string().min(3, "Por favor insira um Rua válido"),
  city: z.string().min(3, "Por favor insira um Rua válido"),
  state: z.string().min(2, "Por favor insira um Rua válido"),
  country: z.string().min(1, "Por favor insira um Rua válido"),
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
    <main className="flex  items-center justify-around ">
      <Form
        onSubmit={handleSubmit(handlerFormSubmit)}
        className="flex flex-col justify-center border border-[#008037] px-10 py-10 shadow-2xl"
      >
        <Label className="text-xs text-[#008037] ">CEP:</Label>
        <Input
          {...register("zipcode")}
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Rua:</Label>
        <Input
          {...register("street")}
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Número:</Label>
        <Input
          {...register("number")}
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Bairro:</Label>
        <Input
          {...register("district")}
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Cidade:</Label>
        <Input
          {...register("city")}
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Estado:</Label>
        <Input
          {...register("state")}
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Pais:</Label>
        <Input
          {...register("country")}
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <div className="flex w-60 item-center justify-between mt-2">
        <Link type='submit' href="/pages/registryCurriculum/" className="bg-[#E3E3E4] text-[#008037] border border-[#008037] rounded-lg flex w-20  items-center justify-center">Anterior</Link>
        <Link href="/pages/registryCurriculum/experience" className="bg-[#008037] rounded-lg text-white flex w-20  items-center justify-center">Proximo</Link>
        </div>
      </Form>
    </main>
  );
}
