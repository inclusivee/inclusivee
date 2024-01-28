import Form from "@/app/components/Form";
import Input from "@/app/components/Input";
import Label from "@/app/components/Label";


export default function Address() {
  return (
    <>
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
      </Form>
    </>
  );
}
