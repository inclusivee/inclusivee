"use client";
import Link from "next/link";
import Image from "next/image";
import background from "../../public/assets/image/bg-home.png";
import UnionSection from "../../public/assets/image/Union.png";
import MulherGif from "../../public/assets/image/moca-telefone.gif";
import RapazGif from "../../public/assets/image/rapaz-telefone.gif";
import { handleButtonClick } from "./components/createCookie";
import { SessionProvider } from "next-auth/react";
import Form from "./components/Form";
import Contato from "./components/contato";

export default function Home(session: any) {
  return (
    <>
      <SessionProvider session={session}>
        <div>
          {/* Image de fundo */}
          <section>
            <div
              className="
          relative h-auto w-full "
            >
              <Image
                src={background}
                alt="Imagem de Fundo"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <div
                className=" 
            absolute  inset-0 h-auto w-full bg-black bg-opacity-40"
              ></div>
            </div>

            {/* Section com gifs */}

            <div className="absolute inset-0 -top-80  mt-96 h-full w-full lg:-top-40  ">
              <div
                className="
             lg:mt-50 absolute inset-0 ml-10 mt-10 flex h-auto w-4/6 flex-col sm:ml-20 sm:mt-10 md:ml-40 md:mt-10 md:w-4/6 lg:ml-60 lg:mt-40  xl:mt-60"
              >
                <p
                  className="
               absolute -top-20 flex flex-col font-sans  text-xs  text-white sm:text-lg  md:text-2xl lg:-top-80 lg:w-5/6 lg:text-3xl xl:text-4xl 2xl:text-5xl "
                >
                  <b>Bem-vinde ao primeiro banco de talentos</b> para preencher
                  vagas com foco na diversidade das empresas, remunerando as
                  comunidades para buscar os melhores perfis.
                </p>

                <Link
                  href="#candidato"
                  className="
                 absolute z-40 flex rounded-md bg-white px-4 py-1 text-xs font-semibold text-[#008037] sm:mt-10 sm:text-lg md:mt-20 md:text-2xl lg:-top-40 lg:rounded-lg lg:px-10 lg:py-5 lg:text-xl"
                >
                  Cadastre-se
                </Link>
              </div>

              <div className="h-full w-full  md:w-[100%]">
                <Image
                  alt="União das paginas"
                  src={UnionSection}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className=" relative lg:-mt-10"
                />
                <div className="absolute inset-0 top-[117%] mt-16 flex w-full flex-col items-center justify-center sm:top-[120%]  ">
                  <h1 className="md:6/6 text-[150%] sm:text-4xl md:items-center md:justify-center md:text-5xl ">
                    <b>Você sabe o que é a inclusivee?</b>
                  </h1>
                  <div className=" flex flex-col items-center justify-center md:mt-10 md:flex md:flex-row md:justify-around ">
                    <p className="mt-4 w-5/6 text-[70%]  md:ml-10 md:w-[100%] md:text-[100%] lg:ml-32">
                      Essa ferramenta facilitará o dia a dia das empresas e dos
                      candidatos minorizados, garantindo um match com curadoria
                      nas auto declarações, reduzindo problemas na divulgação de
                      vagas afirmativas por causa da legislação global e
                      reduzindo os altos custos da empresa em localizar melhores
                      candidatos nas comunidades. Tudo isso, investindo em ONGs
                      e Comunidades e mantendo viva as ações de impacto de apoio
                      e capacitação aos grupos minorizados.
                    </p>
                    <div className="flex flex-row items-center justify-center gap-x-10 ">
                      <Image
                        alt="Mulher no Celular"
                        src={MulherGif}
                        className=" w-[20%] sm:mt-16 md:w-[30%]  lg:mt-44 "
                      />
                      <Image
                        alt="Imagem Rapaz no Celular"
                        src={RapazGif}
                        className="mb-4 w-[20%]  sm:mb-10  md:w-[30%] "
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex h-[90%] w-full flex-col items-center justify-around   bg-[#008037] lg:flex-row lg:px-10 ">
                  <div
                    id="candidato"
                    className="flex h-[80%] w-4/6 flex-col gap-5 rounded-[1.75rem] bg-white  lg:w-[30%] lg:items-center lg:justify-center"
                  >
                    <h2 className=" mb-5 w-4/6 text-center text-sm lg:text-2xl">
                      Quero ter meu currículo na plataforma
                    </h2>

                    <Link
                      onClick={() => handleButtonClick("user")}
                      href="/pages/cadastro"
                      className="
                    flex rounded-md bg-[#008037] px-4 py-2 text-xs font-semibold  text-white  sm:text-lg  md:text-2xl  lg:rounded-lg lg:px-10 lg:py-3  lg:text-xl"
                    >
                      Cadastre-se
                    </Link>
                  </div>
                  <div className="flex h-[80%] w-4/6 flex-col gap-5 rounded-[1.75rem] bg-white  lg:w-[30%] lg:items-center lg:justify-center">
                    <h2 className=" mb-5 w-4/6 text-center text-sm lg:text-2xl">
                      Quero buscar candidatos para uma vaga
                    </h2>

                    <Link
                      onClick={() => handleButtonClick("company")}
                      href="/pages/cadastro"
                      className="
                    flex rounded-md bg-[#008037] px-4 py-2 text-xs font-semibold  text-white  sm:text-lg  md:text-2xl  lg:rounded-lg lg:px-10 lg:py-3  lg:text-xl"
                    >
                      Teste Gratuito
                    </Link>
                  </div>
                  <div className="flex h-[80%] w-4/6 flex-col gap-5 rounded-[1.75rem] bg-white  lg:w-[30%] lg:items-center lg:justify-center ">
                    <h2 className=" mb-5 w-5/6 text-center text-sm lg:-mt-7 lg:text-2xl">
                      É uma comunidade de apoio a diversidade e quer participar?
                    </h2>

                    <Link
                      onClick={() => handleButtonClick("ong")}
                      href="/pages/cadastro"
                      className="
                   flex rounded-md bg-[#008037] px-4 py-2 text-xs font-semibold text-white   sm:text-lg  md:text-2xl  lg:rounded-lg lg:px-10 lg:py-3 lg:text-xl"
                    >
                      Cadastre-se
                    </Link>
                  </div>
                </div>
                <div className='lg:ml-24 lg:h-[50%] lg:mt-24 lg:flex lg:flex-col'>
                  <h2 className='text-[#008037] text-5xl text-bold'>Contato</h2>
                <Contato/>
                </div>
                <footer className="lg:flex lg:h-40 lg:items-center lg:justify-between lg:mt-20 border-t-2 border-gray-300">
                  <Link href={"#logo_header"}>
                    <Image
                      src="/assets/image/Logo.png"
                      alt="Logo Inclusivee"
                      width={200} F
                      height={0}
                      className="ml-24"
                    />
                  </Link>

                  <div className="lg:mr-10">
                    <p>gabriel@mommytech.com.br</p>
                    <p>(11) 99901-1317</p>
                  </div>
                </footer>
              </div>
            </div>
          </section>
        </div>
      </SessionProvider>
    </>
  );
}
