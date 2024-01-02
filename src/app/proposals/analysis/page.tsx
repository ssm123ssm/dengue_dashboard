"use client";

import { FC, useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Page: FC = () => {
  const navigate = useRouter();

  useEffect(() => {
    setTimeout(() => navigate.push("./formulate"), 60000);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex items-center grow w-72 h-72 relative">
        <Image
          height={300}
          width={300}
          alt="Loading"
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
