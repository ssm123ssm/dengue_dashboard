"use client";

import { HiMenu } from "react-icons/hi";
import Image from "next/image";

interface Props {
  toggle: () => void;
}
const MobileHeader = ({ toggle = () => {} }) => {
  return (
    <div className="relative flex flex-row items-center p-4 border-b border-gray-200 md:hidden drop-shadow-sm">
      <button
        className="left-4 border-none p-0 text-2xl absolute"
        onClick={toggle}
      >
        <HiMenu />
      </button>
      <div className="grow h-10 pl-4 relative">
        <Image layout="fill" alt="logo" src="./assets/logo/logo.svg" />
      </div>
    </div>
  );
};

export default MobileHeader;
