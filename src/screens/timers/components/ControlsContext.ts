import { createContext } from "react";
import { TAdd } from "../../../utils/createTimersQueue";

export interface IControlsContext {
  /**
   * CSS module className
   */
  controlStyle: string;

  log(value: string): void;
  addTimer: TAdd;
}

export const ControlsContext = createContext<IControlsContext>({
  controlStyle: "",

  log() {},
  addTimer() {},
});
