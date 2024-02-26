import Form from "@/app/components/Form";
import {Input} from "@/app/components/input";
import Label from "@/app/components/Label";
import Link from "next/link";


export default function Address() {
  return (
    <main className="h-[100vh] flex items-center justify-around w-[100vw] ">
      <Form className="flex flex-col justify-center border border-[#008037] px-10 py-10 shadow-2xl">
        <Label className="text-xs text-[#008037] ">CEP:</Label>
        <Input
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Rua:</Label>
        <Input
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Número:</Label>
        <Input
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Bairro:</Label>
        <Input
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Cidade:</Label>
        <Input
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Estado:</Label>
        <Input
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ">Pais:</Label>
        <Input
          type="text"
          className="mb-5  w-72 border-b-2 border-[#008037]"
        ></Input>
        <div className="flex justify-between">
        <Link href="/pages/registryCurriculum/" className="bg-[#E3E3E4] rounded-lg text-zinc-700	 flex w-20  items-center justify-center">Anterior</Link>
        <Link href="/pages/registryCurriculum/experience" className="bg-[#008037] rounded-lg text-white flex w-20  items-center justify-center">Proximo</Link>
        </div>

      </Form>
    </main>
  );
}
