
import { SignOutButton } from "./SignOutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import { IoMdSettings } from "react-icons/io";
import BgAudio from "./BgAudio";
import ImgNav from "./ImgNav";

async function Navbar() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <nav className="flex items-center gap-2 px-2 shadow-2xl justify-between">
      
      <ImgNav />
   



      {/*
      <Link href="/user/edit"><IoMdSettings /></Link>
      */}


      <div className="flex flex-col justify-center items-center gap-4">
        {" "}
        <SignOutButton /> <BgAudio />
      </div>
    </nav>
  );
}

export default Navbar;
