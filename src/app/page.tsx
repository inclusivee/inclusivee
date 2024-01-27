import Link from "next/link";
import Button from "./components/Button";
import Image from "next/image";
import background from "../../public/assets/image/bg-home.png";
import UnionSection from "../../public/assets/image/Union.png";

export default function Home() {
  return (
<<<<<<< HEAD
    <> 
      <div className="bg-cover bg-no-repeat bg-[url('/assets/image/bg-home.png')] h-screen w-full  flex justify-center items-center text-left ">
        <section className=" w-11/12 h-5/6 bg-white flex justify-start items-center mt-20 bg-opacity-75 rounded-3xl  flex-col text-left">
        <h1 className="text-4xl font-extrabold font-[Arial] mt-10 mb-10 opa">Você sabe o que é a inclusivee?</h1>
        <div className="mx-10">
        <p className="mb-5 text-left"><strong>Bem-vinde ao primeiro banco de talentos</strong> para preencher vagas com foco na diversidade das empresas, remunerando as comunidades para buscar os melhores perfis.</p>
        <p className="mb-5 text-left">Essa ferramenta facilitará o dia a dia das empresas e dos candidatos minorizados, garantindo um match com curadoria nas auto declarações,
         reduzindo problemas na divulgação de vagas afirmativas por causa da legislação global e reduzindo os altos custos da empresa em localizar melhores candidatos nas comunidades. 
         Tudo isso, investindo em ONGs e Comunidades e mantendo viva as ações de impacto de apoio e capacitação aos grupos minorizados.</p>
         </div>
         <div className="w-full flex justify-around items-center">
          <div className="flex flex-col justify-center items-center ">
            <p className="mb-5 font-bold">Quer ter meu currículo na plataforma:</p>
         <Link href={'/pages/registryUser'}><Button className="bg-[#008037] text-white px-10 py-3 rounded-lg">Botão do Candidato</Button></Link> 
=======
    <>
      <div>
        <section>
          <div className="relative h-auto w-full ">
            <Image
              src={background}
              alt="Imagem de Fundo"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
>>>>>>> refs/remotes/origin/main
          </div>
          <div className=" absolute  inset-0 h-auto w-full bg-black bg-opacity-40"></div>
          <div className="lg:50 absolute inset-0  ml-60 flex h-auto w-auto  flex-col  sm:mt-20 md:mt-40  xl:mt-60">
            <div className="flex w-3/6  flex-col font-sans  text-white sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl ">
              <p>
                <strong>Bem-vinde ao primeiro banco de talentos</strong> para
                preencher vagas com foco na diversidade das empresas,
                remunerando as comunidades para buscar os melhores perfis.
              </p>
            </div>
            <div className="mt-10 flex">
              <Link
                href="@/pages/registryUser"
                className="rounded-lg bg-white px-10 py-5 text-xl font-semibold text-[#008037]"
              >
                Cadastre-se
              </Link>
            </div>
          </div>

          <div className="absolute inset-0 -top-20 mt-96 h-full w-full ">
            <Image
              alt="União das paginas"
              src={UnionSection}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
}
