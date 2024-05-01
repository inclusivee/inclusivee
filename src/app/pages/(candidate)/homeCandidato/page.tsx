import Image from "next/image";
import InclusiveeAds from "@/modules/components/inclusiveeAds";
import Link from "next/link";

export default function CandidateHome() {
  return (
    <div>
      <div className=" lg:mx-10 lg:flex lg:flex-row lg:items-start lg:justify-start xl:flex xl:items-center xl:justify-center">
        <section className="lg:flex lg:flex-col">
          <h1 className="lg:mt-5 lg:text-6xl lg:font-bold lg:text-[#008037]">
            Descubra o seu <br />
            futuro profissional!
          </h1>
          <div className="lg:justify-arounded lg:mt-10 lg:flex lg:flex-row lg:items-center">
            <Image
              src="/assets/image/Collab.gif"
              alt="Logo Inclusivee"
              width={350}
              height={0}
              className="flex items-center justify-center"
            />
            <div className="lg:ml-10 lg:flex lg:h-80 lg:w-4/6 lg:flex-col  lg:items-center lg:justify-center">
              <p className="font-normal ">
                Cadastre seu currículo e <br />
                encontre a oportunidade ideal <br />
                para você.
                <br />
                <br />
                Vagas exclusivas, processo de <br /> candidatura simplificado e
                <br />
                acompanhamento <br /> personalizado.
                <br />
                <br />
                <strong className="font-bold">
                  Realize seus sonhos <br /> profissionais com Inclusivee!
                </strong>
              </p>
              <button className="  bg-[#3A7652]  text-white lg:mt-5  lg:flex lg:w-[200px] lg:items-center lg:justify-center lg:rounded-3xl  lg:py-1 lg:text-xl">
                Saiba Mais
              </button>
            </div>
          </div>
        </section>
        {/*<InclusiveeAds/>*/}
      </div>
    </div>
  );
}
