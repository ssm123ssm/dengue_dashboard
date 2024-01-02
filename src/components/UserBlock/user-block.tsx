import { FC, useEffect, useState } from "react";

import { AVATAR } from "@/utility/constants";
import Image from "next/image";
import { Logout } from "iconsax-react";
import { User } from "@/interfaces/User";

interface Props {
  user: User;
  logout: () => void;
}

const UserBlock: FC<Props> = ({ user, logout = () => {} }) => {
  const [data, setData] = useState<User>();

  useEffect(() => {
    if (user) setData(user);
  }, [user]);
  return (
    <div className="flex flex-row items-center p-2">
      <div className="flex flex-row items-center grow">
        <div className="rounded rounded-full w-8 h-8 relative">
          <Image layout="fill" src={data?.image ?? AVATAR} alt="Avatar" />
        </div>

        <div className="flex flex-col grow mx-2 overflow-hidden">
          <p className="font-semibold text-gray-900 text-sm m-0 text-start ellipsis">
            {data?.firstName} {data?.lastName}
          </p>
          <span className="text-xs text-gray-500 text-sm ellipsis">
            {data?.email}
          </span>
        </div>
      </div>

      <div role="button" onClick={logout}>
        <Logout className="text-blue-500" />
      </div>
    </div>
  );
};

export default UserBlock;
