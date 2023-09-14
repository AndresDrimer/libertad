import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import canchaRiver from "@/public/cesped-monumental.jpg"
import logoLib from "@/public/logo-liber.png"
export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="relative">
      <div className="">
        <Image
          src={canchaRiver}
          alt="background"
          className="object-fit"
          sizes="100vw"
          fill
          priority
          placeholder="blur"
        />
      </div>

      {/*bloque*/}
      <div className="text-center relative z-10  text-3xl  text-bolder bg-black/80 w-2/5 lg:w-1/3 h-screen text-white flex flex-col justify-center items-center">
        <div className="absolute cursor-pointer">
          <Link href="/login">
            <div className="relative">
              <Image
                src={logoLib}
                alt="logo"
                width={400}
                height={385}
                className="px-8"
                sizes="(min-width: 1280px) 336px, (min-width: 1040px) calc(24.09vw + 32px), calc(38.89vw - 61px)"
              />
            </div>
            <div className="">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-amarillo-claro to-amarillo-oscuro text-md  sm:text-6xl lg:text-7xl tracking-wide leading-1 hover:scale-110">
                LOGIN
              </h3>

              <h1 className="bolder hover:scale-110 text-sm sm:text-3xl lg:text-4xl break-all tracking-tighter leading-5 align-text-top">
                LIBERTADORES
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
