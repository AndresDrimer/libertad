import Image from "next/image";
import React from "react";
import pelotaGira from "@/public//211.gif"
const loading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white p-8 mt-2">
      <h1 className="text-2xl">Loading...</h1>
      <div className="relative mt-8">
        <Image
          src={pelotaGira}
          alt="loading gif"
          width={100}
          height={100}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default loading;
