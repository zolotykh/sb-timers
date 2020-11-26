import { createContext } from "react";
import { TAdd } from "../../../utils/createTimersQueue";

export interface IControlsContext {
  /**
   * CSS module className
   */
  controlClassName: string;

  log(value: string): void;
  addTimer: TAdd;
}

export const ControlsContext = createContext<IControlsContext>({
  controlClassName: "",

  log() {},
  addTimer() {},
});
