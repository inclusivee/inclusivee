'use client'
import Link from "next/link";
import Button from "./components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-[url('/assets/image/bg-home.png')] h-screen w-full  flex flex-col justify-center items-center text-left ">
        <section className=" w-11/12 h-5/6 bg-white flex justify-start items-center mt-20 bg-opacity-75 rounded-3xl  flex-col text-left">
          <h1 className="text-4xl font-extrabold font-[Arial] mt-10 mb-10 opa">
            Você sabe o que é a inclusivee?
          </h1>
          <div className="mx-10">
            <p className="mb-5 text-left">
              <strong>Bem-vinde ao primeiro banco de talentos</strong> para
              preencher vagas com foco na diversidade das empresas, remunerando
              as comunidades para buscar os melhores perfis.
            </p>
            <p className="mb-5 text-left">
              Essa ferramenta facilitará o dia a dia das empresas e dos
              candidatos minorizados, garantindo um match com curadoria nas auto
              declarações, reduzindo problemas na divulgação de vagas
              afirmativas por causa da legislação global e reduzindo os altos
              custos da empresa em localizar melhores candidatos nas
              comunidades. Tudo isso, investindo em ONGs e Comunidades e
              mantendo viva as ações de impacto de apoio e capacitação aos
              grupos minorizados.
            </p>
          </div>
          <div className="w-full flex justify-around items-center">
            <div className="flex flex-col justify-center items-center ">
              <p className="mb-5 font-bold">
                Quer ter meu currículo na plataforma:
              </p>
              <Link href={"/pages/registryUser"}>
                <Button className="bg-[#008037] text-white px-10 py-3 rounded-lg">
                  Botão do Candidato
                </Button>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="mb-5 font-bold">
                Quero buscar candidatos para uma vaga:
              </p>
              <Link href={"/pages/registryUser"}>
                <Button className="bg-[#008037] text-white px-10 py-3 rounded-lg">
                  Botão da Empresa
                </Button>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="mb-5 font-bold">
                Quero Cadastrar minha comunidade:
              </p>
              <Link href={"/pages/registryUser"}>
                <Button className="bg-[#008037] text-white px-10 py-3 rounded-lg">
                  Botão da Comunidade
                </Button>
              </Link>
            </div>
          </div>
        </section>
      <section  className="flex flex-col">
      <Image src="/assets/image/Union.png" alt="Union" width="100" height="100"/>
      


      </section>

      </div>
          </>
  );
}
