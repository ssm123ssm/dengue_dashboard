"use client";

import MobileHeader from "./mobile-header";
import Sidebar from "@/app/dashboard/sidebar";
import { useState } from "react";

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggleMenu = (ev?: any) => {
    ev?.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <main
      className="flex flex-col md:flex-row h-screen w-screen"
      onClick={() => setExpanded(false)}
    >
      <MobileHeader toggle={toggleMenu} />

      <div
        className={
          "absolute top-0 left-0 drop-shadow-lg md:relative md:drop-shadow-none duration-300 transition-all overflow-hidden z-10 h-screen w-72 lg:w-96 " +
          (expanded ? "md:max-w-auto" : "max-w-0 md:max-w-full")
        }
      >
        <Sidebar compact={expanded} />
      </div>

      <section className="grow bg-white p-4 overflow-auto">{children}</section>
    </main>
  );
}
