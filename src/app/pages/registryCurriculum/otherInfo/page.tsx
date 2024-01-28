
import Form from "@/app/components/Form";
import Input from "@/app/components/Input";
import Label from "@/app/components/Label";


export default function OtherInfo() {
  return (
    <>
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
    </>
  );
}




