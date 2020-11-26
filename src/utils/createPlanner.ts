import { TTimerCallback, TWaitTime } from "../utils/createTimersQueue";

interface ICreatePlannerOptions {
  /**
   * Index or id of planner
   */
  id: number;

  time: TWaitTime;

  /**
   * Add output
   */
  log(text: string): void;

  /**
   * Enqueue timer
   */
  enqueue(cb: TTimerCallback, time: TWaitTime): void;
}

export const createPlanner = (options: ICreatePlannerOptions) => {
  return () => {
    const plannedAt = (new Date()).toLocaleTimeString();

    options.enqueue(() => {
      const text = `${(new Date()).toLocaleTimeString()}: ${options.id} / ${plannedAt}`;
      options.log(text);
      console.log(text);
    }, options.time);
  };
};
