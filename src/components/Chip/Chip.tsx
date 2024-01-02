import { ApprovalState } from "@/enums/ApprovalState";
import { FC } from "react";

interface Props {
  text: string;
}

const Chip: FC<Props> = ({ text }) => {
  const getChip = () => {
    let colors: string = "";

    switch (text) {
      case ApprovalState.NOT_LEAKING:
        colors = "border-success-200 bg-success-50 text-success-700";
        break;
      case ApprovalState.LEAKING:
        colors = "border-warning-200 bg-warning-50 text-warning-700";
        break;
      case ApprovalState.PENDING_REVIEW:
        colors = "border-indigo-200 bg-indigo-50 text-indigo-700";
        break;
    }
    return (
      <div className={"p-2 w-40 border rounded-full text-center " + colors}>
        {text}
      </div>
    );
  };
  return getChip();
};

export default Chip;
