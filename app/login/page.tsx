"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import bombonera from '@/public/bombonera.jpg'
import logoLiber from "@/public/logo-liber.png"

function LoginPage() {

  const router = useRouter();
  const [newUser, setNewUser] = useState({ name: "", password: "" });

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    signIn("credentials", { ...newUser, callbackUrl: "/dashboard"});
    //de esta manera cuando autoriza, me envia a esta pagina
  };

  return (
    <div className="relative">

       {/*background*/}
     <Image
     src={bombonera}
     alt="cancha-background"
     className="z-[-100] object-cover"
     fill
     sizes="100vw"
     placeholder="blur"
     priority />

        {/*login form*/}
      <div className="h-screen flex flex-col justify-center bg-rose-600/80 w-3/4 mx-auto px-8 md:w-1/2  z-[0]">
       
        <div className=" relative w-3/4 sm:w-1/2 mx-auto">
          <Image
            src={logoLiber}
            alt="logo"
            className=""
            width={400}
            height={385}
            sizes="(min-width: 1820px) 400px, (min-width: 780px) calc(23.24vw - 18px), (min-width: 640px) calc(37.5vw - 32px), calc(56.25vw - 48px)"
            priority
          />
        </div>

        <p className="text-right text-lg ">
          <Link href="/register">Need to <span className="text-blue-500 hover:text-blue-700">Register</span>?</Link>
        </p>
        <hr className="border-2 border-x-blue-100"/>
        <h3 className="text-5xl mt-2">LOGIN</h3>

        <form onSubmit={handleForm} className="grid grid-cols-1 gap-4 mt-12">
          <div className="flex flex-col ">
            <label htmlFor="name" className="mr-10 text-xl ">Name: </label>
            <input
              name="name"
              className="w-full indent-2 px-4 py-2 "
              type="text"
              value={newUser.name}
              onChange={(e) => {
                setNewUser({ ...newUser, name: e.target.value });
              }}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mr-10  text-xl">Password: </label>
            <input
              name="password"
              className="w-full indent-2 px-4 py-2"
              type="password"
              value={newUser.password}
              onChange={(e) => {
                setNewUser({ ...newUser, password: e.target.value });
              }}
            />
          </div>
          <button className="border-2 rounded mt-2 py-2 bg-blue-200 hover:text-gray-600 hover:scale-y-110 ">send</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
