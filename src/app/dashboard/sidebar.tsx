"use client";

import {
  DocumentText,
  Home,
  Lifebuoy,
  Setting2,
  StatusUp,
  UserOctagon,
} from "iconsax-react";
import Menu, { MenuItem } from "@/components/Menu/Menu";
import { clearAuthData, selectProfile } from "@/store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "@/store/store";
import Image from "next/image";
import UserBlock from "../../components/UserBlock/user-block";
import { useRouter } from "next/navigation";

const MAIN_MENU: MenuItem[] = [
  {
    icon: <Home />,
    name: "Overview",
    url: "dashboard",
  },
  {
    icon: <StatusUp />,
    name: "Reporting",
    url: "reports",
  },
];

const OTHER_MENU: MenuItem[] = [
  {
    icon: <Lifebuoy />,
    name: "Support",
    url: "support",
  },
  {
    icon: <Setting2 />,
    name: "Settings",
    url: "settings",
  },
];

interface Props {
  compact: boolean;
}

const Sidebar: React.FC<Props> = ({ compact = false }) => {
  const router = useRouter();
  const user = useSelector(selectProfile);
  const dispatch = useDispatch<AppDispatch>();

  const logout = () => {
    dispatch(clearAuthData());
    router.push("/login");
  };

  return (
    <aside className="flex flex-col w-full bg-sidebar h-full w-full ">
      {!compact && (
        <>
          <div className="h-10 mx-2 mt-2 h-10 mt-4 relative ">
            <h2>Dengue Dashboard</h2>
          </div>

          <hr className="border-seperator text-seperator my-2" />
        </>
      )}

      <div className="grow overflow-auto">
        <Menu items={MAIN_MENU} />
      </div>

      <div className="">
        <Menu items={OTHER_MENU} />
      </div>

      <hr className="border-seperator text-seperator my-2 mx-4" />

      <UserBlock user={user} logout={logout} />
    </aside>
  );
};

export default Sidebar;
