"use client";

import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";

import { FC } from "react";
import LineChartComp from "../Charts/LineChartComp";

const lineKeys = ["max", "median", "min"];

interface Props {
  data: any[];
}

const FinancialForecast: FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col h-full rounded-lg border border-gray-200">
      <div className="p-4">
        <div className="flex flex-row items-center">
          <h3 className="grow">Admission summary 2023</h3>

          <button className="flex items-center justify-center border-none bg-light-blue-50 w-6 h-6 rounded-full p-0 mr-1">
            <ArrowCircleLeft className="text-light-blue-600 text-xl" />
          </button>

          <button className="flex items-center justify-center border-none bg-light-blue-50 w-6 h-6 rounded-full p-0">
            <ArrowCircleRight className="text-light-blue-600 text-xl" />
          </button>
        </div>

        <p className="text-xs mt-2 mb-4">
          The trend of admissions of Dengue patients in the year 2023
        </p>

        <button className="md:text-sm 2xl:text-base">View full report</button>
      </div>

      <hr className="border-seperator text-seperator my-2" />

      <div className="grow p-4">
        <LineChartComp data={data} keys={lineKeys} />
      </div>
    </div>
  );
};

export default FinancialForecast;
