import { useTimersQueue } from "../../hooks/useTimersQueue";
import { useOutput } from "../../hooks/useOutput";

export const useTimers = () => {
  const { output, log, reset } = useOutput();

  const timersQueue = useTimersQueue();

  /**
   * Clears current log output and timers queue
   */
  const clear = () => {
    reset();

    timersQueue.clear();
  };

  return {
    add: timersQueue.add,
    clear,
    log,
    output,
  };
};
