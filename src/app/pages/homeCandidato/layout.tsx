import Link from "next/link";
import Image from "next/image";

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
          <Link href={"/pages/homeCandidato"}>
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
              href={"/pages/registryCurriculum"}
              className="md:px10 flex  items-center justify-center px-5 py-1 text-sm text-white sm:text-lg md:h-auto md:px-10  md:py-3 md:text-2xl lg:mr-10  lg:rounded-lg lg:px-2"
            >
              <Image
                src="/assets/image/profile.png"
                alt="Logo Inclusivee"
                width={32}
                height={0}
                className=""
              />
            </Link>

            <Link
              href={"/pages/homeCandidate"}
              className="md:px10 mr-3 flex items-center  justify-center px-5   py-1 text-sm text-white sm:text-lg md:h-auto md:px-10 md:py-3 md:text-2xl  lg:rounded-lg lg:px-2"
            >
              <Image
                src="/assets/image/notification.png"
                alt="Logo Inclusivee"
                width={60}
                height={0}
                className=""
              />
            </Link>
          </div>
        </header>

        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
