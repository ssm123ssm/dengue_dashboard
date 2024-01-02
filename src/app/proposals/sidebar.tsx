"use client";

import "./sidebar.scss";

import {
  CloudChange,
  DocumentUpload,
  FolderCloud,
  SearchNormal1,
  TickCircle,
} from "iconsax-react";
import Stepper, { Step } from "@/components/Stepper/Stepper";

import { usePathname } from "next/navigation";

const steps: Step[] = [
  {
    icon: <DocumentUpload />,
    route: "ingest",
    title: "Ingesting Data",
    description:
      "Upload all the documents and assets which relevant to the company",
  },
  {
    icon: <CloudChange />,
    route: "extraction",
    title: "Extracting financial parameters",
    description:
      "Extract and Analyze Key Financial Parameters with Ai for Informed Decision-Making",
  },
  {
    icon: <SearchNormal1 />,
    title: "Analysing risks",
    route: "analysis",
    description:
      "Checking from private and public data sources and analysing the potential risks",
  },
  {
    icon: <FolderCloud />,
    route: "formulate",
    title: "Formulating the credit proposal",
    description:
      "Structuring the content and building proposal with collected data set",
  },
  {
    icon: <TickCircle />,
    route: "complete",
    title: "Done",
    description: "Export and share with the credit approvers",
  },
];

const Sidebar: React.FC = () => {
  const path = usePathname();

  const getActiveStep = () => {
    switch (path.replace("/proposals/", "")) {
      case "extraction":
        return "Extracting financial parameters";
      case "analysis":
        return "Analysing risks";
      case "formulate":
        return "Formulating the credit proposal";
      case "complete":
        return "Done";
      default:
        return "Ingesting Data";
    }
  };

  const getCompletion = () => {
    switch (path.replace("/proposals/", "")) {
      case "extraction":
        return 1;
      case "analysis":
        return 2;
      case "formulate":
        return 3;
      case "complete":
        return 4;
      default:
        return 0;
    }
  };

  return (
    <aside className="sidebar">
      
    </aside>
  );
};

export default Sidebar;
