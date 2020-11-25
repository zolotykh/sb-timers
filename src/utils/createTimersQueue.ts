import { Branded } from "../type-utils/Branded";

/**
 * setTimeout's callback
 */
export type TTimerCallback = (...args: unknown[]) => unknown;

/**
 * Wait time in milliseconds
 */
export type TWaitTime = Branded<number, "milliseconds">;

/**
 * Add timer to queue
 * @param callback setTimeout's callback
 * @param wait time in milliseconds before firing callback
 */
export type TAdd = (callback: TTimerCallback, wait: TWaitTime) => void;

/**
 * Clear queue and stop current timer
 */
export type TClear = () => void;

export interface IQueueAPI {
  add: TAdd;
  clear: TClear;
}

type TTimerInitializer = () => void;

export function createTimersQueue(): IQueueAPI {
  const queue: TTimerInitializer[] = [];
  /**
   * Cursor to actual timer initializer in the queue.
   * It should be incremented after firing timer initializer.
   */
  let cursor = 0;

  /**
   * Actual timer id (setTimeout call result) needed to be able to stop current timer.
   *
   * Should be `undefined` in next cases:
   * 1. First planning
   * 2. If last timer in queue has been fired before planing next one timer (next planning will be same as "first")
   */
  let currentTimerId: number | undefined;

  const add: TAdd = (callback, wait) => {
const next = () => {
      if (queue[cursor]) {
        queue[cursor]();
        cursor++;
      }
    };

    const timerInitializer: TTimerInitializer = () => {
      currentTimerId = (setTimeout(() => {
        // See comments about setting it to undefined.
        currentTimerId = undefined;
        callback();
        next();
      }, wait) as unknown) as number;
    };

    queue.push(timerInitializer);

    // First planning, there isn't planned timer in the browser's Timers API
    if (!currentTimerId) {
      next();
    }
  };

  /**
   * Stop current timer and clear the queue
   */
  const clear = () => {
    clearTimeout(currentTimerId);
    queue.length = 0;
    cursor = 0;
  };

  return {
    add,
    clear,
  };
}
