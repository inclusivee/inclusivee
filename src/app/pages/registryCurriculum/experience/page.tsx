import Form from "@/app/components/Form";
import {Input} from "@/app/components/input";
import Label from "@/app/components/Label";
import Link from "next/link";

export default function Experience() {
  return (
    <main className="h-[100vh] flex items-center justify-around w-[100vw] ">

      <Form className="flex flex-col justify-center border border-[#008037] px-10 py-10 shadow-2xl">
        <h3>Experiencia</h3>
        <Label className="text-xs text-[#008037] ">Nome Empresa:</Label>
        <Input
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Cargo:</Label>
        <Input
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Inicio:</Label>
        <Input
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Desligamento:</Label>
        <Input
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Empresa Atual:</Label>
        <Input
          type="checkbox"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Atribuições do cargo:</Label>
        <textarea className="mb-5  h-40 w-72 border-b-2 border-[#008037]"></textarea>

        <div className="flex justify-between">
          <Link
            href="/pages/registryCurriculum/address"
            className="flex w-20 items-center	 justify-center rounded-lg  bg-[#E3E3E4] text-zinc-700"
          >
            Anterior
          </Link>
          <Link
            href="/pages/registryCurriculum/hability"
            className="flex w-20 items-center justify-center rounded-lg  bg-[#008037] text-white"
          >
            Proximo
          </Link>
        </div>
      </Form>
    </main>
  );
}
