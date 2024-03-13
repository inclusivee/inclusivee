import Image from "next/image";
import Link from "next/link";

export default function CandidateHome() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around">
        <section className="flex flex-col  items-center justify-center">
          <h1 className="lg:mt-5 lg:text-6xl lg:text-[#008037]">
            Bem Vindo a Inclusivee!
          </h1>
          <Image
            src="/assets/image/teamWork.gif"
            alt="Logo Inclusivee"
            width={400}
            height={0}
            className="flex items-center justify-center"
          />
          <p>
            <b>Inclusivee: Descubra o seu futuro profissional!</b>
            <br />
            Cadastre seu currículo e encontre a oportunidade ideal para você.{" "}
            <br />
            <b>Vagas exclusivas</b>, processo de candidatura <b>simplificado</b>{" "}
            e acompanhamento <b>personalizado</b>. <br />
            <b>Realize seus sonhos profissionais com Inclusivee!</b>
          </p>
        </section>
        <aside className="flex flex-wrap items-start justify-start gap-1 lg:w-80">
          <div className="w-full  lg:items-end  lg:justify-start ">
            <Link
              href="/"
              className=" flex border-2 lg:h-28 lg:flex-1  lg:items-end lg:justify-start "
            >
              <div className=" text-sm lg:w-full lg:bg-slate-600 lg:p-1 lg:text-slate-950 lg:opacity-70">
                Meu Curriculo
              </div>
            </Link>
          </div>

          <div className="flex w-full gap-1 lg:flex-row lg:items-center lg:justify-center ">
            <Link
              href="/"
              className=" flex border-2 lg:h-20  lg:flex-1 lg:items-end lg:justify-start lg:opacity-70 "
            >
              <div className="bg-slate-600 text-sm lg:w-full ">Mensagens </div>
            </Link>
            <Link
              href="/"
              className=" flex border-2  lg:h-20 lg:flex-1 lg:items-end lg:justify-start lg:opacity-70 "
            >
              <div className="bg-slate-600 text-sm lg:w-full">Minhas Vagas</div>
            </Link>
            <Link
              href="/"
              className="flex border-2  lg:h-20 lg:flex-1 lg:items-end lg:justify-start lg:opacity-70 "
            >
              <div className="bg-slate-600 text-sm lg:w-full">Nada</div>
            </Link>
          </div>
          <div className="flex w-full  gap-1 lg:flex-row lg:items-center lg:justify-center ">
            <Link
              href="/"
              className="flex  border-2 lg:h-24 lg:flex-1 lg:items-end lg:justify-start lg:opacity-70 "
            >
              <div className="bg-slate-600 text-sm lg:w-full">Nada</div>
            </Link>
            <Link
              href="/"
              className="flex border-2 lg:h-24 lg:flex-1 lg:items-end lg:justify-start lg:opacity-70 "
            >
              <div className="bg-slate-600 text-sm lg:w-full">Nada</div>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
