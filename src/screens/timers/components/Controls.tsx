import React, { useMemo } from "react";
import { FC } from "react";
import { Button } from "../../../components/button/Button";
import { TAdd, TClear } from "../../../utils/createTimersQueue";
import { ControlsContext, IControlsContext } from "./ControlsContext";

interface IControlsProps {
  /**
   * CSS modules className
   */
  style: string;

  /**
   * CSS modules className
   */
  controlStyle: string;

  clear: TClear;
  addTimer: TAdd;
  log(value: string): void;
}

export const Controls: FC<IControlsProps> = ({
  children,
  style,
  controlStyle,
  clear,
  log,
  addTimer,
}) => {
  const contextValue: IControlsContext = useMemo(
    () => ({ log, controlStyle, addTimer }),
    [log, controlStyle, addTimer]
  );

  return (
    <ControlsContext.Provider value={contextValue}>
      <ul className={style}>
        {children}
        <li className={controlStyle}>
          <Button text="Сбросить" onClick={clear} />
        </li>
      </ul>
    </ControlsContext.Provider>
  );
};
