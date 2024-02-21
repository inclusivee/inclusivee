import Link from "next/link";
import Image from "next/image";
import background from "../../public/assets/image/bg-home.png";
import UnionSection from "../../public/assets/image/Union.png";
import MulherGif from "../../public/assets/image/moca-telefone.gif"
import RapazGif from "../../public/assets/image/rapaz-telefone.gif"

export default function Home() {
  return (
    <>
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
                <b>Bem-vinde ao primeiro banco de talentos</b> para
                preencher vagas com foco na diversidade das empresas,
                remunerando as comunidades para buscar os melhores perfis.
              </p>

              <Link
                href="/pages/registryUser"
                className="
                 absolute flex rounded-md bg-white px-4 py-1 text-xs font-semibold text-[#008037] sm:mt-10 sm:text-lg md:mt-20 md:text-2xl lg:-top-40 lg:rounded-lg lg:px-10 lg:py-5 lg:text-xl"
              >
                Cadastre-se
              </Link>
            </div>

            <div className="w-full h-full ">
              <Image
                alt="União das paginas"
                src={UnionSection}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                className=" relative lg:-mt-10"
              />
              <div className="absolute inset-0 top-60 mt-16 flex w-full flex-col flex justify-center items-center sm:top-96   sm:mt-32  md:mt-48">
                <h1 className="text-lg sm:text-2xl md:text-4xl md:w-full">
                  <b>Você sabe o que é a inclusivee?</b>
                </h1>
                <p className="text-xs w-5/6 mt-4 sm:text-lg md:w-3/6 md:flex-row">
                  Essa ferramenta facilitará o dia a dia das empresas e dos
                  candidatos minorizados, garantindo um match com curadoria nas
                  auto declarações, reduzindo problemas na divulgação de vagas
                  afirmativas por causa da legislação global e reduzindo os
                  altos custos da empresa em localizar melhores candidatos nas
                  comunidades. Tudo isso, investindo em ONGs e Comunidades e
                  mantendo viva as ações de impacto de apoio e capacitação aos
                  grupos minorizados.
                </p>
                <div className="flex flex-row justify-center	items-center ">
                <Image
                alt="Mulher no Celular"
                src={MulherGif}
              
                className="w-24 sm:w-40 sm:mt-16 mt-5"
                />
                <Image
                alt="Imagem Rapaz no Celular"
                src={RapazGif}
                className="w-24 sm:w-40 mb-4 sm:mb-10"
                
                

                />
                </div>

              </div>
              <div className="w-full h-full bg-[#008037] ">
              <h1>Cadastro</h1>    

          </div>
            </div>
          </div>
         

        </section>
      </div>
    </>
  );
}
