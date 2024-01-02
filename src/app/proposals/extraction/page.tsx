"use client";
import axios from "axios";
import { AppDispatch, RootState } from "@/store/store";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import DatePicker from "react-datepicker";

import FileCard from "@/components/Cards/FileCard";
import FileUpload from "@/components/FileUpload/FileUpload";
import Notice from "@/components/Notice/Notice";
import { TransferItem } from "@/interfaces/TransferItem";
import { useRouter } from "next/navigation";

const ClinicalFeatures = ['Fever', 'Arthralgia', 'Nausea', 'Vomiting', 'Rash', 'Abd pain', 'Persistant vomiting', 'Lethargy', 'Tender hepatomegaly'];
const Bleeding = ['GI Bleeding', 'PV Bleeding']
const USS = ['Pericholecystic thickening', 'Pericholecystic fluid', 'FF in hepatorenal pouch', 'FF in pelvis', 'R/s pleural effusion', 'L/s pleural effusion']

const Page: FC = () => {
  const navigate = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const { temp } = useSelector((state: RootState) => state.commonReduce);

  const [showMessage, setMessage] = useState<boolean>(true);
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="flex flex-col grow mb-4 h-full w-full m-auto overflow-auto mt-8">
      <div className="overflow-scroll  w-full">
        <div className="flex w-3/4 m-auto flex flex-col">

          <div className="flex flex-row w-1/2 my-3 font-bold">
            Clinical features
          </div>

          <div className="flex flex-row w-full">

            <div className="flex my-3">
              {ClinicalFeatures.slice(0, 3).map((feature) => (
                <label className="mr-2 w-40" style={{ fontSize: 'unset', lineHeight: 'unset', fontWeight: 'unset' }}>
                  <input type="checkbox" name={feature} /> {feature}
                </label>
              ))}
            </div>
            

          </div>
          <div className="flex flex-row w-full my-3">

            <div className="flex">
              {ClinicalFeatures.slice(3,6).map((feature) => (
                <label className="mr-2 w-40" style={{ fontSize: 'unset', lineHeight: 'unset', fontWeight: 'unset' }}>
                  <input type="checkbox" name={feature} /> {feature}
                </label>
              ))}
            </div>
            

          </div>
          <div className="flex flex-row w-full my-3">

            <div className="flex">
              {ClinicalFeatures.slice(6,9).map((feature) => (
                <label className="mr-2 w-40" style={{ fontSize: 'unset', lineHeight: 'unset', fontWeight: 'unset' }}>
                  <input type="checkbox" name={feature} /> {feature}
                </label>
              ))}
            </div>
            

          </div>
        </div>

        <div className="w-3/4 m-auto my-5">
          <div className="flex flex-row w-1/2 font-bold">
            Bleeding
          </div>

          <div className="flex flex-row w-full my-3">

            {Bleeding.map((feature) => (
              <div className="flex flex-row  w-40">
                <div className="flex">
                  <label className="mr-3" style={{ fontSize: 'unset', lineHeight: 'unset', fontWeight: 'unset' }}>
                    <input type="checkbox" name={feature} /> {feature}
                  </label>
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="w-3/4 m-auto my-3 mb-4">
          <div className="w-1/2 font-bold mb-3">
            USS findings
          </div>

          <div className="flex flex-col w-full">

            {USS.map((feature) => (
              <div className="flex flex-row my-1">

                <label className="mr-2 w-80" style={{ fontSize: 'unset', lineHeight: 'unset', fontWeight: 'unset' }}>
                  <input type="checkbox" name={feature} className="mr-3" /> {feature}
                </label>
                <input type="date" />

              </div>

            ))}

          </div>
        </div>

        <div className="flex flex-row justify-between items-center w-1/2 m-auto">

          <button onClick={() => navigate.replace("/dashboard")}>Cancel</button>

          <button
            className="primary"
            onClick={() => {

              navigate.push("../dashboard");
            }}
          >
            Finish
          </button>
        </div>
      </div>

    </div>
  );
};

export default Page;
