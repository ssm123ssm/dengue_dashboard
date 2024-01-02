import "./ButtonGroup.scss";

import { FC, useState } from "react";

export enum ButtonType {
  SIMPLE = 0,
  ALTERNATIVE = 1,
  TINY = 2,
}

interface Props {
  buttons: string[];
  selected?: string;
  type: ButtonType;
  select: (name: string) => void;
}

const ButtonGroup: FC<Props> = ({
  buttons,
  selected,
  type = ButtonType.SIMPLE,
  select = () => {},
}) => {
  const [selectedButton, selectButton] = useState<string>(selected || "");

  const onButtonSelect = (name: string) => {
    selectButton(name);
    select(name);
  };

  const getClass = () => {
    switch (type) {
      case ButtonType.SIMPLE:
        return "simple";
      case ButtonType.ALTERNATIVE:
        return "alternative";
      case ButtonType.TINY:
        return "alternative tiny";
    }
  };

  return (
    <div className={"group " + getClass()}>
      {buttons?.map((x: string) => (
        <button
          key={x}
          className={selectedButton === x ? "selected" : ""}
          onClick={() => onButtonSelect(x)}
        >
          {x}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
