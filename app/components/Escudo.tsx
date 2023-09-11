"use client";
import { TeamWithCountry } from "@/types";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Escudo({ it }: { it: TeamWithCountry }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/dashboard/teams/${it.id}`);
  };

  return (
    <Image
      src={it.image || "/"}
      alt="escudo"
      key={it.id}
      width={35}
      height={35}
      className="px-30 cursor-pointer hover:scale-110 transform  active:animate-useWiggle"
      style={{ width: "auto", height: "auto" }}
      onClick={handleClick}
    />
  );
}

export default Escudo;
