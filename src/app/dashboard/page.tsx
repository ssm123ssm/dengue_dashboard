"use client";

import { AppDispatch, RootState } from "@/store/store";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CreditRisk from "@/components/Cards/CreditRisk";
import { DATETIME } from "@/utility/constants";
import FileUpload from "@/components/FileUpload/FileUpload";
import FinancialForecast from "@/components/Cards/FinancialForecast";
import { HiPlus } from "react-icons/hi";
import { Proposal } from "@/interfaces/Proposal";
import ProposalTable from "@/components/Tables/ProposalTable";
import { TransferItem } from "@/interfaces/TransferItem";
import moment from "moment";
import { selectProfile } from "@/store/slices/authSlice";
import { setTemp } from "@/store/slices/commonSlice";
import { useRouter } from "next/navigation";

const line = [
  {
    x: moment("2023-02-23T08:42:00.000+05:30", DATETIME).unix(),
    max: 3034,
    median: 2203,
    min: 1032,
  },
  {
    x: moment("2023-02-25T08:42:00.000+05:30", DATETIME).unix(),
    max: 2034,
    median: 1203,
    min: 32,
  },
  {
    x: moment("2023-03-23T08:42:00.000+05:30", DATETIME).unix(),
    max: 3034,
    median: 2203,
    min: 1032,
  },
  {
    x: moment("2023-04-23T08:42:00.000+05:30", DATETIME).unix(),
    max: 3034,
    median: 2203,
    min: 1032,
  },
  {
    x: moment("2023-05-23T08:42:00.000+05:30", DATETIME).unix(),
    max: 3034,
    median: 2203,
    min: 1032,
  },
  {
    x: moment("2023-06-23T08:42:00.000+05:30", DATETIME).unix(),
    max: 7834,
    median: 4503,
    min: 2332,
  },
  {
    x: moment("2023-07-23T08:42:00.000+05:30", DATETIME).unix(),
    max: 3034,
    median: 2203,
    min: 1032,
  },
  {
    x: moment("2023-08-23T08:42:00.000+05:30", DATETIME).unix(),
    max: 334,
    median: 203,
    min: 32,
  },
  {
    x: moment("2023-09-23T08:42:00.000+05:30", DATETIME).unix(),
    max: 3034,
    median: 2203,
    min: 1032,
  },
  {
    x: moment("2023-10-23T08:42:00.000+05:30", DATETIME).unix(),
    max: 3034,
    median: 2203,
    min: 1032,
  },
  {
    x: moment("2023-11-23T08:42:00.000+05:30", DATETIME).unix(),
    max: 3034,
    median: 2203,
    min: 1032,
  },
  {
    x: moment("2023-12-23T08:42:00.000+05:30", DATETIME).unix(),
    max: 3034,
    median: 2203,
    min: 1032,
  },
];

const pie = [
  { name: "DF", value: 400 },
  { name: "DHF", value: 300 },
  { name: "Viral Fever", value: 300},
  { name: "Other", value: 150}
];

const data: Proposal[] = [
  {
    id: "1",
    size: 200,
    bed:1,
    name: "Mr Supun Sudaraka Manathunga",
    company: "30",
    date: "24-12-2023",
    rating: 10,
    createdDate: "24-12-2023",
    decision: "Leaking",
  },
  {
    id: "2",
    size: 192,
    bed:2,
    name: "Mrs Jane Doe",
    company: "23",
    date: "25-12-2023",
    rating: 50,
    createdDate: "25-12-2023",
    decision: "Not leaking",
  },
  {
    id: "3",
    size: 216,
    bed:3,
    name: "Mr Asiri Kulasooriya",
    company: "55",
    date: "30-11-2023",
    rating: 80,
    createdDate: "30-11-2023",
    decision: "Pending Review",
  },
  {
    id: "1",
    size: 200,
    bed:4,
    name: "Mr Kasun Dananjaya",
    company: "35",
    date: "24-12-2023",
    rating: 120,
    createdDate: "24-12-2023",
    decision: "Not leaking",
  },
  {
    id: "2",
    size: 192,
    bed:5,
    name: "Mrs Nanda Silva",
    company: "23",
    date: "25-12-2023",
    rating: 58,
    createdDate: "25-12-2023",
    decision: "Not leaking",
  },
  {
    id: "3",
    size: 216,
    bed:6,
    name: "Mr Lahiru Fonseka",
    company: "55",
    date: "30-11-2023",
    rating: 5,
    createdDate: "30-11-2023",
    decision: "Pending Review",
  },
];

const Dashboard: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectProfile);

  const { isAuthenticated } = useSelector(
    (state: RootState) => state.authReduce
  );

  const [name, setName] = useState<string>("");

  const upload = (files: File[]) => {
    dispatch(
      setTemp(
        files.map((x: File) => {
          return {
            name: x.name,
            size: x.size,
            type: x.type,
            data: URL.createObjectURL(x),
          } as TransferItem;
        })
      )
    );
    router.push("./proposals/ingest");
  };

  useEffect(() => {
    if (user) {
      setName(`${user.firstName} ${user.lastName}`);
    }
  }, [user]);

/*   useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]); */

  return (
    <div className="w-full h-full">
      <div className="mb-4">
        <h2>{name}</h2>
        <span>In-ward patient summary</span>
      </div>

      <div className="w-full grid grid-cols-12 gap-0">
        <div className="flex flex-col gap-4 col-span-12 max-h-full md:flex-row lg:flex-col md:mb-4 sm:max-md:col-span-12 lg:col-span-4 h-full border-solid md:border-b lg:border-r border-gray-200 pr-4">
          <div className="lg:grow">
            <FinancialForecast data={line} />
          </div>

          <div className="lg:grow">
            <CreditRisk data={pie} />
          </div>
        </div>

        <div className="mt-4 col-span-12 md:col-span-12 lg:mt-0 lg:col-span-8 p-4 pt-0">
          <div className="flex flex-row items-center">
            <h3 className="grow">New admission</h3>

            <button
              className="primary flex flex-row items-center"
              onClick={() => router.push("/proposals/ingest")}
            >
              <HiPlus className="mr-2" />
              Addmission
            </button>
          </div>

          <hr className="border-seperator text-seperator my-4" />

          <div className="mt-4">
            <ProposalTable data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
