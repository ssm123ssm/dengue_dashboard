"use client";

import "./page.scss";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import { Document, Page, pdfjs } from "react-pdf";
import { DocumentDownload, Message } from "iconsax-react";
import { FC, useEffect, useState } from "react";

import { AVATAR } from "@/utility/constants";
import { AppDispatch } from "@/store/store";
import { HiChevronLeft } from "react-icons/hi";
import Pagination from "@/components/Pagination/Pagination";
import Users from "@/components/Users/Users";
import { enableChat } from "@/store/slices/commonSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PDFPage: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  };

  useEffect(() => {
    return () => {
      dispatch(enableChat(false));
    };
  }, []); 

  return (
    <div className="flex flex-col h-full items-start">
      <hr className="w-full text-gray-200" />

      <div className="flex flex-row justify-between items-center mt-4 mb-2 w-full">
        <button
          className=" flex flex-row items-center"
          onClick={() => router.replace("/dashboard")}
        >
          <HiChevronLeft className="mr-2" />
          All Proposals
        </button>

        <div className="flex flex-row items-center">
          <Users list={[AVATAR, AVATAR, AVATAR, AVATAR, AVATAR, AVATAR]} />

          <a
            className="mx-2 btn primary"
            href="/s.pdf"
            target="_blank"
            download
          >
            <DocumentDownload size={16} />
          </a>

          <button className="primary">Submit</button>
        </div>
      </div>

      <div className="page" style={{ width: "100%" }}>
        <Document
          file="/s.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page 
          key={pageNumber}
          pageNumber={pageNumber}
          width={900}
          height={1400}
          className="custom-page-class"
          />
        </Document>
      </div>

      <Pagination
        page={pageNumber}
        size={1}
        totalCount={numPages ?? 0}
        onPage={(page: number) => setPageNumber(page)}
      />

      <button
        className="primary absolute bottom-5 right-5"
        onClick={() => dispatch(enableChat(true))}
      >
        <Message />
      </button>
    </div>
  );
};

export default PDFPage;
