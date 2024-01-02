"use client";

import { FC, useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Page: FC = () => {
  const navigate = useRouter();

  useEffect(() => {
    setTimeout(() => navigate.replace("./complete"), 600000); // 10 minutes wait
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex items-center grow relative">
        <Image
          height={300}
          width={300}
          alt="logo"
          className="w-72 h-72"
          src="/assets/animation/loading.gif"
        />
      </div>

      <button onClick={() => navigate.replace("/dashboard")}>
        End process
      </button>
    </div>
  );
};

export default Page;
