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

      <Form className="flex justify-center flex-col px-10 py-10 shadow-2xl border border-[#008037]">
        <Label className="text-xs text-[#008037] ">CEP:</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Rua:</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Número:</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Bairro:</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Cidade:</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Estado:</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Pais:</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
      </Form>
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
      </Form>

      <Form className="flex justify-center flex-col px-10 py-10 shadow-2xl border border-[#008037]">
      <h3>Experiencia</h3>
      <Label className="text-xs text-[#008037] ">Nome Empresa:</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Cargo:</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Inicio:</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Desligamento:</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Empresa Atual:</Label>
        <Input
          type="checkbox"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Atribuições do cargo:</Label>
        <textarea
          
          className="border-b-2  border-[#008037] w-72 mb-5 h-40"
        ></textarea>
      </Form>
      <Form className="flex justify-center flex-col px-10 py-10 shadow-2xl border border-[#008037]">
      <Label className="text-xs text-[#008037] ">Escolaridade :</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Cursos livres :</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <Label className="text-xs text-[#008037] ">Idiomas :</Label>
        <Input
          type="text"
          className="border-b-2  border-[#008037] w-72 mb-5"
        ></Input>
        <fieldset className="text-xs text-[#008037] ">Regime de Contrato:</fieldset>
        <div>
        <Input
          type="checkbox"
          className="border-b-2  border-[#008037] "
          name="CLT"
        ></Input>
        <Label className="text-xs text-[#008037] ml-4">CLT</Label>
        </div>
        <div>
        <Input
          type="checkbox"
          className="border-b-2  border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ml-4">PJ</Label>
        </div>
        <div>
        <Input
          type="checkbox"
          className="border-b-2  border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ml-4">Freelance</Label>
        </div>
        <fieldset className="text-xs text-[#008037] ">Regime de Trabalho:</fieldset>
        <div>
        <Input
          type="checkbox"
          className="border-b-2  border-[#008037] "
          name="CLT"
        ></Input>
        <Label className="text-xs text-[#008037] ml-4">Remoto</Label>
        </div>
        <div>
        <Input
          type="checkbox"
          className="border-b-2  border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ml-4">Hibrido</Label>
        </div>
        <div>
        <Input
          type="checkbox"
          className="border-b-2  border-[#008037]"
        ></Input>
        <Label className="text-xs text-[#008037] ml-4">Presencial</Label>
        </div>
        
      </Form>
      
    </main>
  );
}
