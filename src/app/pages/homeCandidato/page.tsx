import Image from "next/image";

export default function CandidateHome() {
  return (
    <>
      <div>
        <section>
          <h1>Bem Vindo a Inclusivee!</h1>
          <Image
            src="/assets/image/teamWork.gif"
            alt="Logo Inclusivee"
            width={200}
            height={0}
            className=""
          />
          <p>
            <b>Inclusivee: Descubra o seu futuro profissional!</b>
            <br />
            Cadastre seu currículo e encontre a oportunidade ideal para você.{" "}
            <br />
            <b>Vagas exclusivas</b>, processo de candidatura <b>simplificado</b>{" "}
            e acompanhamento <b>personalizado</b>. <br />
            <b>Realizeseus sonhos profissionais com Inclusivee!</b>
          </p>
        </section>
        <aside>
          <div>Area 1</div>
          <div>
            <div>Area 2</div>
            <div>Area 3</div>
            <div>Area 4</div>
          </div>
          <div>
            <div>Area 5</div>
            <div>Area 6</div>
          </div>
        </aside>
      </div>
    </>
  );
}
