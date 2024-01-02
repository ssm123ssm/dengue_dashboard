import { HiAcademicCap, HiX } from "react-icons/hi";

import { FC } from "react";
import { InfoCircle } from "iconsax-react";

interface Props {
  title: string;
  description: string;
  dismiss: () => void;
}

const Notice: FC<Props> = ({ title, description, dismiss = () => {} }) => {
  return (
    <div className="flex flex-row rounded-lg border border-gray-300 items-start p-2 relative">
      <div className="border border-gray-200 p-2 rounded-lg bg-white mr-2">
        <InfoCircle />
      </div>

      <div className="grow">
        <h3 className="mb-1">{title}</h3>
        <p>{description}</p>
        <button className="mt-4 p-0 border-none" onClick={() => dismiss()}>
          Dismiss
        </button>
      </div>

      <div className="p-2" onClick={() => dismiss()}>
        <HiX />
      </div>
    </div>
  );
};

export default Notice;
