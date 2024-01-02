"use client";

import { FC, useEffect } from "react";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Page: FC = () => {
  const searchParams = useSearchParams();

  const setStorage = async () => {
    const verifier = await localStorage.getItem("verifier");
    const code = searchParams.get("code");

    if (code != undefined && verifier === searchParams.get("state")) {
      await localStorage.setItem("code", code);
    } else {
      await localStorage.setItem("verifier", "UN_VERIFIED");
    }

    window.close();
  };

  useEffect(() => {
    setStorage();
  });

  return (
    <div className="w-screen h-screen flex items-cneter justify-center">
      <div className="w-72 h-72 relative">
        <Image layout="fill" alt="Logo" src="/assets/animation/loading.gif" />
      </div>
    </div>
  );
};

export default Page;
