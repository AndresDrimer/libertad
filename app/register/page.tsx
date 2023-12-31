"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import canchaRacing from "@/public/racing.jpg"
import logoLiber from "@/public/logo-liber.png"
function RegisterPage() {
  const router = useRouter();

  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const userInfo = await res.json();

      //check if user has already been registered in DB
      if (res.status === 400) {
        alert("user already registered, please try again");
        setNewUser({ name: "", email: "", password: "" });
        return router.push("/register");
      }

      //if it´s ok go to login
      router.push("/login");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
   
    <div className="relative"> 
<Image
     src={canchaRacing}
     alt="cancha-background"
     className="z-[-100] object-cover"
     fill
     sizes="100vw"
     placeholder="blur"
     priority />

     <div className="h-screen flex flex-col justify-center  bg-rose-600/80 w-3/4 mx-auto px-8 md:w-1/2 lg:w-1/4">

     
    
     <div className=" justify-center relative w-3/4 md:w-1/2 mx-auto">
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

        <p className="text-right text-lg">
          <Link href="/login">Need to <span className="text-blue-500 hover:text-blue-700">Login</span>?</Link>
        </p>
        <hr className="border-2 border-x-blue-100 w-full"/>
        <h3 className="text-5xl mt-2 text-left tracking-tighter">REGISTER</h3>

      <form onSubmit={handleForm} className="grid grid-cols-1 gap-4 mt-4">

        <div className="flex flex-col mb-2 items-start">
          <label htmlFor="name" className="mr-10">Name</label>
          <input
            name="name"
            type="text"
            className="w-full indent-2 px-4 py-2 "
            value={newUser.name}
            onChange={(e) => {
              setNewUser({ ...newUser, name: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col mb-2 items-start">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={newUser.email}
            className="w-full indent-2 px-4 py-2"
            onChange={(e) => {
              setNewUser({ ...newUser, email: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col mb-2 items-start">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="w-full indent-2 px-4 py-2"
            value={newUser.password}
            onChange={(e) => {
              setNewUser({ ...newUser, password: e.target.value });
            }}
          />
        </div>
        <button className="w-full border-2 rounded mt-4 py-2 bg-blue-200 hover:text-gray-600 hover:scale-y-110 ">send</button>
      </form></div>
    </div>
  );
}

export default RegisterPage;

