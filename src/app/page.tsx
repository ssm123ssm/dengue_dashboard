"use client";

import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();

  const { isAuthenticated, userRole } = useSelector(
    (state: RootState) => state.authReduce
  );

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login", { scroll: false });
    } else {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router, userRole]);

  return <></>;
}
