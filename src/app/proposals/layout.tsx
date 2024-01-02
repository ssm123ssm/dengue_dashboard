"use client";

import { useEffect, useState } from "react";

import Chat from "@/components/Chat/Chat";
import { RootState } from "@/store/store";
import Sidebar from "@/app/proposals/sidebar";
import { useSelector } from "react-redux";

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [chatShown, showChat] = useState<boolean>();
  const { chatEnabled } = useSelector((state: RootState) => state.commonReduce);

  useEffect(() => {
    showChat(chatEnabled);
  }, [chatEnabled]);

  return (
    <main className="flex flex-row h-screen w-screen">
      <div className="w-96 min-w-96">
        <Sidebar />
      </div>
      <div className="grow h-full w-32">{children}</div>
    </main>
  );
}
