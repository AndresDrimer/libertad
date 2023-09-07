import React from "react";
import Navbar from "../components/Navbar";
import { NextAuthProvider } from "../context/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

import Carrousel from "../components/Carrousel";

const DashboradLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-gradient-to-r from-black to-[#302d67] text-white p-4">
      <NextAuthProvider>
        <Navbar />
        <div>
          <p className="text-xl border-b text-center">
            Hola {session?.user?.name?.toUpperCase()} !
          </p>
        </div>
     <Carrousel />
        {children}
      </NextAuthProvider>
    </div>
  );
};

export default DashboradLayout;
