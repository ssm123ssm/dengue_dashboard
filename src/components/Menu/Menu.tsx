"use client";

import "./Menu.scss";

import { FC } from "react";
import { HiAdjustments } from "react-icons/hi";
import { usePathname } from "next/navigation";

export interface MenuItem {
  name: string;
  url: string;
  icon: any;
}

export interface Menu {
  items: MenuItem[];
}

const Menu: FC<Menu> = ({ items }) => {
  const path = usePathname();

  return (
    <div className="p-4">
      {items?.map((x: MenuItem, i: number) => (
        <a
          key={i}
          className={"link" + (path.includes(x.url) ? " active" : "")}
          href={x.url}
        >
          <HiAdjustments />
          <span className="ml-2">{x.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Menu;
