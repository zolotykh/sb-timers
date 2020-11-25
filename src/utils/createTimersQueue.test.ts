import { createTimersQueue, IQueueAPI } from "./createTimersQueue";

let queue: IQueueAPI;

beforeEach(() => {
  queue = createTimersQueue();
});

describe("createTimersQueue", () => {
  it("test callback calls", () => {
    jest.useFakeTimers();

    const timerCallback1 = jest.fn();
    const timerCallback2 = jest.fn();
    const timerCallback3 = jest.fn();

    queue.add(timerCallback1, 0);
    queue.add(timerCallback2, 0);

    expect(timerCallback1).not.toBeCalled();
    expect(timerCallback2).not.toBeCalled();

    jest.runAllTimers();

    expect(setTimeout).toHaveBeenCalledTimes(2);

    expect(timerCallback1).toBeCalled();
    expect(timerCallback2).toBeCalled();
  });

  it("clear queue method", () => {
    jest.useFakeTimers();

    const timerCallback1 = jest.fn();

    expect(timerCallback1).not.toBeCalled();

    queue.add(timerCallback1, 100);

    queue.clear();

    jest.runAllTimers();

    expect(timerCallback1).not.toBeCalled();
  });
});

export {};
