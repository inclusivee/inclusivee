'use client'
import Form from "@/app/components/Form";
import { Input } from "@/app/components/input";
import Label from "@/app/components/Label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../../app/components/Button";
import Cookies from "js-cookie";
import createExperience from "../actions/experience-action";



const schema = z.object({
  company: z.string().min(3),
  office: z.string().min(3),
  startOfWork: z.string().min(1),
  layOff: z.string().min(3),
  currentCompany: z.string().min(3),
  assignmentOfPositions: z.string().min(2),
  phone: z.string().min(1),
});

type DataProps = z.infer<typeof schema>;

export default function FormExperience() {
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
    createExperience(formData)
  };

  return (
    <main className="flex  items-center justify-around ">
      <Form
        onSubmit={handleSubmit(handlerFormSubmit)}
        className="flex flex-col justify-center border border-[#008037] px-10 py-10 shadow-2xl"
      >
        <Label className="text-xs text-[#008037] ">Nome Empresa:</Label>
        <Input
          {...register("company")}
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Cargo:</Label>
        <Input
          {...register("office")}
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Inicio:</Label>
        <Input
          {...register("startOfWork")}
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Desligamento:</Label>
        <Input
          {...register("layOff")}
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Empresa Atual:</Label>
        <Input
          {...register("currentCompany")}
          type="checkbox"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Atribuições do cargo:</Label>
        <textarea
          {...register("assignmentOfPositions")}
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></textarea>
        <Button type="submit">Salvar</Button>
      </Form>
    </main>
  );
}


