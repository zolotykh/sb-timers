import React from "react";
import styles from "./Timers.module.css";
import { Controls } from "./components/Controls";
import { Control } from "./components/Control";
import { useTimers } from "./useTimers";

export const Timers = () => {
  const { add, clear, log, output } = useTimers();

  return (
    <div className={styles.timers}>
      <Controls
        clear={clear}
        addTimer={add}
        style={styles.timers__controls}
        controlStyle={styles.timers__control}
        log={log}
      >
        <Control id={1} time={1000} />
        <Control id={2} time={2000} />
        <Control id={3} time={3000} />
      </Controls>

      <h3>Лог</h3>

      <textarea
        readOnly={true}
        className={styles.timers__log}
        value={output}
      />
    </div>
  );
};
