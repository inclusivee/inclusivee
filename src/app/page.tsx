import Link from "next/link";
import Button from "./components/Button";
import Image from "next/image";
import background from "../../public/assets/image/bg-home.png";
import UnionSection from "../../public/assets/image/Union.png";

export default function Home() {
  return (
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
