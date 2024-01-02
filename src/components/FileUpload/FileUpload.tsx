"use client";

import "./FileUpload.scss";

import { ChangeEvent, DragEvent, FC, useRef, useState } from "react";

import { FiUploadCloud } from "react-icons/fi";

interface Props {
  allowedExtensions: string;
  upload: (files: File[]) => void;
}

const FileUpload: FC<Props> = ({
  upload = () => {},
  allowedExtensions = "",
}) => {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [hover, setHover] = useState<boolean>(false);

  const dragover = (ev: DragEvent<HTMLDivElement>, stop: boolean) => {
    ev.preventDefault();
    ev.stopPropagation();

    setHover(stop);
  };

  const dropFiles = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    filterFiles(ev.dataTransfer.files);
  };

  const selectFiles = (ev: ChangeEvent<HTMLInputElement>) => {
    setHover(false);
    filterFiles(ev.target.files);
  };

  const filterFiles = (filesList: FileList | null) => {
    if (filesList) {
      const types: string[] = allowedExtensions.split(",");

      const list = [];

      for (let i = 0; i < filesList.length; i++) {
        const file = filesList.item(i);
        const ext = file?.name.slice(
          file.name.lastIndexOf("."),
          file.name.length
        );

        if (!allowedExtensions.length || types.includes(ext!)) {
          list.push(file!);
        }
      }

      upload(list);
    }
  };

  const openModal = () => {
    inputFileRef.current?.click();
  };

  return (
    <div
      className={"dropper" + (hover ? " hover" : "")}
      onDragOver={(ev) => dragover(ev, true)}
      onDragLeave={(ev) => dragover(ev, false)}
      onDrop={dropFiles}
      onClick={openModal}
      onKeyDown={openModal}
    >
      <div className="rounded-lg border border-gray-200 p-2 mb-2">
        <FiUploadCloud />
      </div>

      <input
        ref={inputFileRef}
        className="hidden"
        type="file"
        multiple
        accept={allowedExtensions}
        onChange={selectFiles}
      />

      <p className="text-center">
        <span className="text-light-blue-700 font-semibold">
          Click to Create new
        </span>{" "}
        or drag and drop <br /> CSV, PDF, DOC files to generate credit proposal
        with power of Ai
      </p>
    </div>
  );
};

export default FileUpload;
