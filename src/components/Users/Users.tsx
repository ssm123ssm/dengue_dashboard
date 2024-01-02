import { FC } from "react";
import Image from "next/image";

interface Props {
  list: string[];
}

const Users: FC<Props> = ({ list }) => {
  return (
    <div className="relative h-full" style={{ width: `${list.length * 16}px` }}>
      {list.slice(0, 4).map((x: string, i: number) => (
        <Image
          className="absolute top-0 border border-white rounded-full -translate-y-1/2"
          style={{ left: `${i * 20}px` }}
          key={i}
          height={40}
          width={40}
          src={x}
          alt="Avatar"
        />
      ))}
    </div>
  );
};

export default Users;
