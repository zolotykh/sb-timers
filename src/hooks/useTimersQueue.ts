import { useMemo } from "react";
import { createTimersQueue } from "../utils/createTimersQueue";

export const useTimersQueue = () => {
  return useMemo(createTimersQueue, []);
};
