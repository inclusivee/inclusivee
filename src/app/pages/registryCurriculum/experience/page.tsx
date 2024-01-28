import Form from "@/app/components/Form";
import Input from "@/app/components/Input";
import Label from "@/app/components/Label";


export default function Experience() {
  return (
    <>
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
    </>
  );
}