import ButtonGroup, { ButtonType } from "../ButtonGroup/ButtonGroup";
import { ImportCurve, SearchNormal1 } from "iconsax-react";

import Chip from "../Chip/Chip";
import { GoQuestion } from "react-icons/go";
import Image from "next/image";
import Pagination from "../Pagination/Pagination";
import { Proposal } from "@/interfaces/Proposal";
import RatingProgress from "../RatingProgress";
import { Tooltip } from "react-tooltip";

interface Props {
  data: Proposal[];
}

const ProposalTable: React.FC<Props> = ({ data = [] }) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-col sm:flex-row md:justify-between md:items-center mb-4">
        <div className="relative sm:grow md:grow-0">
          <input className="pl-9 w-full md:w-auto" placeholder="Search" />
          <SearchNormal1 className="text-xl font-sm absolute top-1/2 left-2 -translate-y-2/4" />
        </div>

        <div className="mt-2 md:mt-0 sm:grow md:grow-0">
          <ButtonGroup
            buttons={["All", "DF", "DHF", "Others"]}
            selected="All"
            type={ButtonType.SIMPLE}
            select={() => {}}
          />
        </div>
      </div>
      <Tooltip id="my-tooltip" />
      <div className="grow overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4">Name of the patient</th>
              <th className="py-4">Bed number</th>
              <th className="px-2">Age</th>
              <th className="px-2">Admission Date</th>
              <th className="px-2">
                Latest platelet count{" "}
                <GoQuestion
                  className="text-gray-400"
                  data-tooltip-id="tooltip"
                  data-tooltip-content="Please check last investigation time"
                />
              </th>
              <th className="px-2">Latest investigation date</th>
              <th className="px-2">
                Comments{" "}
                <GoQuestion
                  className="text-gray-400"
                  data-tooltip-id="tooltip"
                  data-tooltip-content="Consultants comments/remarks"
                />
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((x: Proposal, i: number) => (
              <tr
                key={x.id}
                className={
                  "text-gray-600 md:text-xs 2xl:text-sm font-normal border-b border-gray-200"
                }
              >
                <td className="flex flex-row items-center py-4 px-2 relative">
                  
                  <div className="ml-2">
                    <span className="font-semibold">{x.name}</span>
                    <br />
              
                  </div>
                </td>
                <td className="px-2">{x.bed}</td>
                <td className="px-2">{x.company}</td>
                <td className="px-2">{x.date}</td>
                <td className="px-2">
                  <RatingProgress rating={x.rating} />
                </td>
                <td className="px-2">{x.createdDate}</td>
                <td className="px-2">
                  <Chip text={x.decision} />
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-row items-center justify-between mt-4">
        <Pagination page={1} size={10} totalCount={200} onPage={() => {}} />

        <button>View all</button>
      </div>
    </div>
  );
};

export default ProposalTable;
