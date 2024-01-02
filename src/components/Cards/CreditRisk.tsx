"use client";

import ButtonGroup, { ButtonType } from "../ButtonGroup/ButtonGroup";
import PieChartComp, { PieChartValue } from "../Charts/PieChartComp";

import { FC } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi2";

interface Props {
  data: PieChartValue[];
}

enum Risks {
  CREDIT_INQUIRIES = "Dengue Fever",
  DELINUENCIES = "DHF",
  BANKRUPTCY = "Viral Fever",
}

const risks = [
  Risks.CREDIT_INQUIRIES as string,
  Risks.DELINUENCIES as string,
  Risks.BANKRUPTCY as string,
];

const CreditRisk: FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col h-full rounded-lg border border-gray-200 p-4">
      <div className="flex flex-row items-baseline">
        <h3 className="mr-2">Outcome/Diagnosis breakdown</h3>

        <button className="bg-light-blue-50 border-light-blue-200 rounded-full text-xs p-2 text-light-blue-500">
          Report
        </button>
      </div>

      <p className="text-xs font-normal mb-4">
        Summary of the outcome of the patients admitted in the ward in the year 2023
      </p>

      <ButtonGroup
        buttons={risks}
        type={ButtonType.ALTERNATIVE}
        selected={Risks.CREDIT_INQUIRIES}
        select={(name: string) => {
          console.log(name);
        }}
      />
      <div className="grow mt-2">
        <PieChartComp data={data} />
      </div>
    </div>
  );
};

export default CreditRisk;
