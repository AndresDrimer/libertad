import React from "react";
import Navbar from "../components/Navbar";
import { NextAuthProvider } from "../context/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";

const DashboradLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-gradient-to-r from-black to-[#302d67] text-white p-4 min-h-screen flex flex-col justify-between">
      <Navbar />
      <Carrousel />
      {children}
      <Footer />
    </div>
  );
};

export default DashboradLayout;
