import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="relative">
      <Image
        src={"/cesped-monumental.jpg"}
        alt="fondo"
        className="relative"
        fill
       
      />
      {/*
<div>
<Image
src={"/logo-liber.png"}
alt="logo"
className= "relative mx-auto"
width={500}
height={500}

/></div>*/}
      {/*bloque*/}
      <div className="text-center relative z-10  text-3xl py-2 text-bolder bg-black/80 w-2/5 lg:w-1/3 h-screen text-white flex flex-col justify-center items-center">
        <div className="absolute">
        <button className="">    <Link href="/login">
          <Image
            src={"/logo-liber.png"}
            alt="logo"
            
            width={400}
            height={400}
            className=" pt-8"
          />
          
            {" "}
            <h1 className="text-md text-amber-300/90 text-sm sm:text-xl md:text-5xl text-normal hover:scale-110">- LOGIN -</h1>
        
              <p className="bolder hover:scale-110 text-sm sm:text-2xl md:text-5xl break-all">LIBERTADORES</p>
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
