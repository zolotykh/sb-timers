import React from "react";
import { useContext, useMemo, FC } from "react";
import { Button } from "../../../components/button/Button";
import { createPlanner } from "../../../utils/createPlanner";
import { TWaitTime } from "../../../utils/createTimersQueue";
import { ControlsContext } from "./ControlsContext";

interface IControlProps {
  /**
   * Control button id
   */
  id: number;

  time: TWaitTime;
}

export const Control: FC<IControlProps> = ({ id, time }) => {
  const ctx = useContext(ControlsContext);
  const onClick = useMemo(
    () =>
      createPlanner({
        id,
        time,
        log: ctx.log,
        enqueue: ctx.addTimer,
        // eslint-disable-next-line
      }),
    [id, time],
  ); // observe only props

  return (
    <li className={ctx.controlClassName}>
      <Button text={`Кнопка ${id}`} onClick={onClick} />
    </li>
  );
};
