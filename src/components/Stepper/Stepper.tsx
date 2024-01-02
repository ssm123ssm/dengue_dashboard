import "./Stepper.scss";

import { FC } from "react";

export interface Step {
  title: string;
  route: string;
  description: string;
  icon: any;
}

interface Props {
  steps: Step[];
  activeStep: string;
  completed: number;
}

const Stepper: FC<Props> = ({ steps, activeStep, completed }) => {
  return (
    <div className="stepper">
      {steps.map((x: Step, i: number) => (
        <div
          key={i}
          className={
            "step " +
            (x.route === activeStep ? "active" : "") +
            (i <= completed ? "completed" : "")
          }
        >
          <div className="icon">{x.icon}</div>

          <div className="ml-2">
            <h4>{x.title}</h4>
            <p>{x.description}</p>
          </div>

          <div className="line"></div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
