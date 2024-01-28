import Form from "@/app/components/Form";
import Link from "next/link";
import Label from "@/app/components/Label";
import Input from "@/app/components/Input";
import Image from "next/image";
import Button from "@/app/components/Button";

export default function RegistryCurriculum() {
  return (
    <main className="h-[100vh] flex items-center justify-around w-[100vw] ">
      <Form className="flex justify-center  flex-col px-10 py-10 shadow-2xl border border-[#008037]">
        <Label className="text-xs text-[#008037] ">Primeiro Nome:</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037]">Sobrenomes:</Label>
        <Input
          type="text"
          className="border-b-2 border-[#008037] b w-72 mb-5 "
        ></Input>
        <Label className="text-xs text-[#008037]">Data de Nascimento:</Label>
        <Input
          type="date"
          className="border-b-2 border-[#008037] b w-72 mb-5 "
        ></Input>
        <Label className="text-xs text-[#008037]">Cpf:</Label>
        <Input
          type="text"
          className="border-b-2 border-[#008037] b w-72 mb-5 "
        ></Input>
        <Label className="text-xs text-[#008037]">Identidade:</Label>
        <Input
          type="text"
          className="border-b-2 border-[#008037] b w-72 mb-5 "
        ></Input>
        <Label className="text-xs text-[#008037]">Nascionalidade:</Label>
        <Input
          type="text"
          className="border-b-2 border-[#008037] b w-72 mb-5 "
        ></Input>
        <Label className="text-xs text-[#008037]">Telefone:</Label>
        <Input
          type="tel"
          className="border-b-2 border-[#008037] b w-72 mb-5 "
        ></Input>
      </Form>
      
      
      
      
    </main>
  );
}
