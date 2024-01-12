import Button from "@/app/components/Button";
import Form from "@/app/components/Form";
import Input from "@/app/components/Input";
import Label from "@/app/components/Label";
import Link from "next/link";
import Image from 'next/image';


export default function Login() {
    return (
    <div className="h-[100vh] flex items-center justify-center w-[100vw] flex-col">
      <div className="flex items-center justify-center  flex-col  border border-[#008037] px-10 py-10 shadow-2xl">
      <Link href={'/'} className=""><Image src="/assets/image/Logo.png" alt="Logo Inclusivee" width={200} height={0} /></Link>
      <Form className="flex justify-center  flex-col     ">
      <Label className="text-xs text-[#008037] ">Email:</Label>
      <Input type="email" className="border-b-2  border-[#008037] w-[300px]"></Input>
      <Label className="text-xs text-[#008037]">Senha:</Label>
      <Input type="email" className="border-b-2 border-[#008037] b w-[300px] "></Input>
      <Link href={"/"} className="flex text-xs justify-end items-end text-[#008037] ">Esqueci a senha</Link>
      <Link href={'/pages/login'} className="flex justify-center items-center"><Button className="bg-[#008037] text-white px-10 py-3 rounded-lg mt-5">Acessar</Button></Link> 
      </Form>
      </div>
    </div>
    )
  }
