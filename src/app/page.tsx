import Link from "next/link";
import Button from "./components/Button";
import Image from "next/image";
import background from "../../public/assets/image/bg-home.png";
import UnionSection from "../../public/assets/image/Union.png";

export default function Home() {
  return (
    <>
      <div>
        {/* Image de fundo */}
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
            <div className=" absolute  inset-0 h-auto w-full bg-black bg-opacity-40"></div>
          </div>

          {/* Section com gifs */}

          <div className="absolute inset-0 -top-80 mt-96 h-full w-full lg:-top-40 ">
            <div className=" lg:mt-50 absolute  inset-0 flex h-auto w-auto  flex-col  sm:mt-20 md:mt-40 lg:ml-60  xl:mt-60">
              <div className=" absolute -top-20 flex flex-col font-sans  text-sm  text-white sm:text-lg  md:text-2xl lg:-top-80 lg:w-3/6 lg:text-3xl xl:text-4xl 2xl:text-5xl ">
                <p>
                  <strong>Bem-vinde ao primeiro banco de talentos</strong> para
                  preencher vagas com foco na diversidade das empresas,
                  remunerando as comunidades para buscar os melhores perfis.
                </p>
              </div>
              <div className=" absolute flex lg:-top-20 ">
                <Link
                  href="/pages/registryUser"
                  className="rounded-md bg-white px-4 py-1 text-xs font-semibold text-[#008037] lg:rounded-lg lg:px-10 lg:py-5 lg:text-xl"
                >
                  Cadastre-se
                </Link>
              </div>
            </div>

            <Image
              alt="União das paginas"
              src={UnionSection}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <div></div>
        </section>
      </div>
    </>
  );
}
