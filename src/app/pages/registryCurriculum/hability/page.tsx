import Form from "@/app/components/Form";
import Input from "@/app/components/Input";
import Label from "@/app/components/Label";


export default function Hability() {
  return (
    <>
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
    </>
  );
}