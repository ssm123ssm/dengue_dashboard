"use client";
import axios from "axios";
import { AppDispatch, RootState } from "@/store/store";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FileCard from "@/components/Cards/FileCard";
import FileUpload from "@/components/FileUpload/FileUpload";
import Notice from "@/components/Notice/Notice";
import { TransferItem } from "@/interfaces/TransferItem";
import { useRouter } from "next/navigation";

const Page: FC = () => {
  const navigate = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const { temp } = useSelector((state: RootState) => state.commonReduce);

  const [showMessage, setMessage] = useState<boolean>(true);
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="flex flex-col grow mb-4 h-full">
      <section className="flex justify-center grow bg-white p-8 grow overflow-auto mx-auto w-3/4">
        <div className="flex flex-col max-w-full w-full max-h-full">
          <div className="flex flex-row mb-4">
            <div className="w-32 mr-4">
              <h3>Admit a new patient</h3>
              <p>Name of the patient</p>
            </div>
            <input className="flex-grow" placeholder="Enter name" />
          </div>

          <div className="flex flex-row mb-4">
            <div className="w-32 mr-4">
              <p>Age of the patient</p>
            </div>
            <input className="flex-grow" placeholder="Enter age" type="number" />
          </div>

          <div className="flex flex-row mb-4">
            <div className="w-32 mr-4">
              <p>Address of the patient</p>
            </div>
            <input className="flex-grow" placeholder="Enter address" />
          </div>

          <div className="flex flex-row mb-4">
            <div className="w-32 mr-4">
              <p>Platelet count</p>
            </div>
            <input className="flex-grow" placeholder="Enter platelet count" type="number" />
          </div>

          <div className="flex flex-row mb-4">
            <div className="w-32 mr-4">
              <p>Presence of plasma leakage</p>
            </div>
            <select className="flex-grow">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="flex flex-row mb-4">
            <div className="w-32 mr-4">
              <p>Sex</p>
            </div>
            <div className="flex-grow">
              <label className="mr-2" style={{ fontSize: 'unset', lineHeight: 'unset', fontWeight: 'unset' }}>
                <input type="radio" name="sex" value="male" /> Male
              </label>
              <label style={{ fontSize: 'unset', lineHeight: 'unset', fontWeight: 'unset' }}>
                <input type="radio" name="sex" value="female" /> Female
              </label>
            </div>
          </div>

          <div className="flex flex-row mb-4">
            <div className="w-32 mr-4">
              <p>Co-morbidities</p>
            </div>
            <div className="flex-grow">
              <label className="mr-2 w-32 mr-4" style={{ fontSize: 'unset', lineHeight: 'unset', fontWeight: 'unset' }}>
                <input type="checkbox" name="diabetes" /> Diabetes
              </label>
              <label className="mr-2" style={{ fontSize: 'unset', lineHeight: 'unset', fontWeight: 'unset' }}>
                <input type="checkbox" name="hypertension" /> Hypertension
              </label>
              <label className="mr-2" style={{ fontSize: 'unset', lineHeight: 'unset', fontWeight: 'unset' }}>
                <input type="checkbox" name="ihd" /> IHD
              </label>
              <label style={{ fontSize: 'unset', lineHeight: 'unset', fontWeight: 'unset' }}>
                <input type="checkbox" name="pregnancy" /> Pregnancy
              </label>
            </div>
          </div>

          <div className="flex flex-col mb-4 mt-4">
            <h3>Confirmation of Diagnosis</h3>
            <div className="flex flex-row mb-2 mt-4">
              <div className="w-32 mr-4">
                <p>NS1 Ag status</p>
              </div>
              <select className="flex-grow" style={{ width: '50%' }}>
                <option value="positive">Positive</option>
                <option value="negative">Negative</option>
              </select>
            </div>
            <div className="flex flex-row mb-2">
              <div className="w-32 mr-4">
                <p>PCR status</p>
              </div>
              <select className="flex-grow" style={{ width: '50%' }}>
                <option value="positive">Positive</option>
                <option value="negative">Negative</option>
              </select>
            </div>
            <div className="flex flex-row mb-2">
              <div className="w-32 mr-4">
                <p>IgM status</p>
              </div>
              <select className="flex-grow" style={{ width: '50%' }}>
                <option value="positive">Positive</option>
                <option value="negative">Negative</option>
              </select>
            </div>
            <div className="flex flex-row">
              <div className="w-32 mr-4">
                <p>IgG status</p>
              </div>
              <select className="flex-grow" style={{ width: '50%' }}>
                <option value="positive">Positive</option>
                <option value="negative">Negative</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-row justify-between items-center w-1/2 m-auto mb-10">
        <button onClick={() => navigate.replace("/dashboard")}>Cancel</button>

        <button
          className="primary"
          onClick={() => {

            navigate.push("./extraction");
          }}
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default Page;
