import { SignOutButton } from "./SignOutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

import BgAudio from "./BgAudio";
import ImgNav from "./ImgNav";
import ImgNav2 from "./ImgNav2";

async function Navbar() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <nav className=" w-full shadow-2xl h-[140px] mb-2">
      <div className="w-full flex justify-between items-center gap-2 px-2">
      <ImgNav />

      <div className="flex flex-col justify-center items-center gap-4">
        {" "}
        <SignOutButton aria-label="signout-button"/>
        <BgAudio aria-label="audio-button"/>
        <ImgNav2 />
      </div>
      </div>
      <p className="text-xl border-b text-center pb-1">⚽ 
            Hola {session?.user?.name?.toUpperCase()} ! ⚽
          </p>
        
    </nav>
  );
}

export default Navbar;
