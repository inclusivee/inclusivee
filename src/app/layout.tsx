import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Button from "./components/Button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inclusivee",
  description: "Create by Mommytech Corporation and Inclusivee Tech",
};

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
      <body className={inter.className}>
        <header className="flex items-center justify-between bg-white shadow-xl sm:px-10 sm:py-2  ">
          <Link href={"/"}>
            <Image
              src="/assets/image/Logo.png"
              alt="Logo Inclusivee"
              width={200}
              height={0}
              className="ml-2"
            />
          </Link>
          <Link
            href={"/pages/login"}
            className="md:px10 mr-3  flex h-7 items-center justify-center rounded bg-[#008037] px-5 py-1 text-sm text-white sm:text-lg md:h-auto md:px-10  md:py-3  md:text-2xl lg:rounded-lg"
          >
            Acessar
          </Link>
        </header>

        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
