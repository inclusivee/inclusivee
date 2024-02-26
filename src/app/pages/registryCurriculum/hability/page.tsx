import Form from "@/app/components/Form";
import {Input} from "@/app/components/input";
import Label from "@/app/components/Label";
import Link from "next/link";


export default function Hability() {
  return (
    <main className="h-[100vh] flex items-center justify-around w-[100vw] ">

       <Form className="flex justify-center flex-col px-10 py-10 shadow-2xl border border-[#008037]">
      <Label className="text-xs text-[#008037] ">Habilidade :</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Habilidade :</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Habilidade :</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Habilidade :</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Habilidade :</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <div className="flex justify-between">
          <Link
            href="/pages/registryCurriculum/experience"
            className="flex w-20 items-center	 justify-center rounded-lg  bg-[#E3E3E4] text-zinc-700"
          >
            Anterior
          </Link>
          <Link
            href="/pages/registryCurriculum/otherInfo"
            className="flex w-20 items-center justify-center rounded-lg  bg-[#008037] text-white"
          >
            Proximo
          </Link>
        </div>
      </Form>
    </main>
  );
}