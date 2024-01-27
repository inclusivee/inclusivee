import Button from "@/app/components/Button";
import Form from "@/app/components/Form";
import Input from "@/app/components/Input";
import Label from "@/app/components/Label";
import Link from "next/link";
import Image from "next/image";

export default function RegistryUser() {
    return (
      <main className="h-[100vh] flex items-center justify-center w-[100vw] ">
      <Form className="flex justify-center  flex-col px-10 py-10 shadow-2xl border border-[#008037]">
      <Link href={'/'} className=""><Image src="/assets/image/Logo.png" alt="Logo Inclusivee" width={200} height={0} /></Link>
      <Label className="text-xs text-[#008037] ">Email:</Label>
      <Input type="email" className="border-b-2  border-[#008037] w-72 mb-5"></Input>
      <Label className="text-xs text-[#008037]">Senha:</Label>
      <Input type="email" className="border-b-2 border-[#008037] b w-72 mb-5 "></Input>
      <Label className="text-xs text-[#008037]">Repita a Senha:</Label>
      <Input type="email" className="border-b-2 border-[#008037] b w-72 mb-5 "></Input>
      <Link href={'/pages/home'} className="flex justify-center items-center"><Button className="bg-[#008037] text-white px-10 py-3 rounded-lg mt-5">Cadastrar</Button></Link> 
      </Form>
    </main>
    )
  }
  