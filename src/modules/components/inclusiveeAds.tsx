import Link from "next/link";
import Image from "next/image";


export default function InclusiveeAds() {
  return (
    <aside className="lg:flex lg:flex-wrap lg:w-[30%] lg:mt-10 lg:ml-10 lg:gap-5">
    <div className=" lg:flex lg:w-full  lg:items-end  lg:justify-start  relative ">
      <Link
        href="/"
        className=" lg:flex lg:items-end lg:justify-start lg:border-2 lg:w-full"
      >
        <Image
          src="/assets/image/menu1.jpeg"
          alt="Imagem de Fundo"
          width={200}
          height={100}
          className=" w-full"
        />
        <div className="absolute bg-slate-600 text-sm lg:w-[99%] lg:text-white lg:bg-opacity-70 ">
           Minhas Vagas
        </div>
      </Link>
    </div>

    <div className="flex w-full gap-1 lg:flex-row lg:items-center lg:justify-center ">
      <Link
        href="/"
        className=" relative flex border-2 lg:h-20  lg:flex-1 lg:items-end lg:justify-start"
      >
        <Image
          src="/assets/image/menu1.jpeg"
          alt="Imagem de Fundo"
          width={100}
          height={100}
          className=" w-full h-full"
        />
        <div className="absolute bg-slate-600 text-sm lg:w-[100%] lg:text-white lg:bg-opacity-70 ">Mensagens </div>
      </Link>
     <Link
        href="/"
        className=" relative flex border-2 lg:h-20  lg:flex-1 lg:items-end lg:justify-start"
      >
        <Image
          src="/assets/image/menu1.jpeg"
          alt="Imagem de Fundo"
          width={200}
          height={100}
          className=" w-full h-full"
        />
        <div className="absolute bg-slate-600 text-sm lg:w-[100%] lg:text-white lg:bg-opacity-70">Minhas Vagas</div>
      </Link>
      <Link
        href="/"
        className="relative flex border-2 lg:h-20  lg:flex-1 lg:items-end lg:justify-start"
      >
        <Image
          src="/assets/image/menu1.jpeg"
          alt="Imagem de Fundo"
          width={200}
          height={100}
          className=" w-full h-full"
        />
        <div className="absolute bg-slate-600 text-sm lg:w-[100%] lg:text-white lg:bg-opacity-70">Nada</div>
      </Link>
    </div>
    <div className="flex w-full  gap-1 lg:flex-row lg:items-center lg:justify-center ">
      <Link
        href="/"
        className="relative flex border-2   lg:flex-1 lg:items-end lg:justify-start lg:h-32"
      >
        <Image
          src="/assets/image/menu1.jpeg"
          alt="Imagem de Fundo"
          width={200}
          height={100}
          className=" w-full h-full"
        />
        <div className="absolute bg-slate-600 text-sm lg:w-[100%] lg:text-white lg:bg-opacity-70">Nada</div>
      </Link>
      <Link
        href="/"
        className="relative flex border-2   lg:flex-1 lg:items-end lg:justify-start lg:h-32"
      >
        <Image
          src="/assets/image/menu1.jpeg"
          alt="Imagem de Fundo"
          width={200}
          height={100}
          className=" w-full h-full"
        />
        <div className="absolute bg-slate-600 text-sm lg:w-[100%] lg:text-white lg:bg-opacity-70">Nada</div>
      </Link>
    </div>
  </aside>
  );
};


