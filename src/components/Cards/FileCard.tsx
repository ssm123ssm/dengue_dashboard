import { FC } from "react";
import { FiTrash } from "react-icons/fi";
import { HiCheckCircle } from "react-icons/hi";
import Image from "next/image";
import RatingProgress from "../RatingProgress";

interface Props {
  id: number;
  title: string;
  size: number;
  progress: number;
  remove: (id: string | number) => void;
}

const FileCard: FC<Props> = ({
  id,
  title,
  size,
  progress = 50,
  remove = (id: string | number) => {},
}) => {
  return (
    <div className="flex flex-row border border-gray-200 rounded-lg p-2 items-start relative">
      <div className="relative">
        <Image height={30} width={30} src="/assets/icons/pdf.svg" alt="PDF" />
      </div>

      <div className="grow ml-2">
        <div className="flex flex-row justify-between items-center">
          <div className="grow">
            <p className="font-semibold">{title}</p>
            <p>{size}</p>
          </div>

          <button
            className="border-none p-0 text-xl text-gray-500"
            onClick={() => remove(id)}
          >
            <FiTrash />
          </button>
        </div>

        <div className="w-full">
          {progress < 100 && <RatingProgress def={false} rating={progress} />}

          {progress > 99 && (
            <span className="flex flex-row items-center text-green-600 font-medium">
              <HiCheckCircle />
              <span className="ml-1">Uploaded successfully</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileCard;
