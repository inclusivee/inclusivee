import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/Button";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/assets/image/logo-inclusivee.png"
          type="image/x-icon"
        />
      </head>
      <body>
        <header className="flex items-center justify-between bg-white shadow-xl sm:px-10 sm:py-2  ">
          <Link href={"/pages/homeEmpresa"}>
            <Image
              src="/assets/image/Logo.png"
              alt="Logo Inclusivee"
              width={200}
              height={0}
              className="ml-2"
            />
          </Link>
          <div className="flex flex-row">
            <Link
              href={"/pages/registryCompany"}
              className="md:px10  flex  items-center justify-center px-5 py-1 text-sm text-white sm:text-lg md:h-auto md:px-10  md:py-3 md:text-2xl lg:mr-10  lg:rounded-lg lg:px-2"
            >
              <Image
                src="/assets/image/profile.png"
                alt="Icone cadastrar prefil da empresa"
                width={32}
                height={0}
                className=""
              />
            </Link>
            {/* <Link
              href={"/pages/homeEmpresa"}
              className="md:px10  flex  items-center justify-center px-5 py-1 text-sm text-white sm:text-lg md:h-auto md:px-10  md:py-3 md:text-2xl lg:mr-10  lg:rounded-lg lg:px-2"
            >
              <Image
                src="/assets/image/order.png"
                alt="Icone ordem de compra"
                width={20}
                height={0}
                className=""
              />
            </Link> */}
            <Link
              href={"/pages/vagas"}
              className="md:px10  flex  items-center justify-center px-5 py-1 text-sm text-white sm:text-lg md:h-auto md:px-10  md:py-3 md:text-2xl lg:mr-10  lg:rounded-lg lg:px-2"
            >
              <Image
                src="/assets/image/job.png"
                alt="Icone de vagas"
                width={28}
                height={0}
                className=""
              />
            </Link>
            {/* <Link
              href={"/pages/homeEmpresa"}
              className="md:px10  flex  items-center justify-center px-5 py-1 text-sm text-white sm:text-lg md:h-auto md:px-10  md:py-3 md:text-2xl lg:mr-10  lg:rounded-lg lg:px-2"
            >
              <Image
                src="/assets/image/cart.png"
                alt="Icone carrinho de compras"
                width={40}
                height={0}
                className=""
              />
            </Link> */}

            <Link
              href={"/pages/homeEmpresa"}
              className="md:px10 mr-3  flex items-center  justify-center px-5   py-1 text-sm text-white sm:text-lg md:h-auto md:px-10  md:py-3 md:text-2xl  lg:rounded-lg lg:px-2"
            >
              <Image
                src="/assets/image/notification.png"
                alt="Icone de notificações"
                width={60}
                height={0}
                className=""
              />
            </Link>
            <Button
              href="/"
              className="mt-5 flex items-center justify-center rounded-lg bg-[#008037] px-10 py-3 text-white"
            >
              Sair
            </Button>
          </div>
        </header>

        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
