import { useRef, useReducer } from "react";

export const useOutput = () => {
  const outputRef = useRef("");
  const [, reRender] = useReducer((i) => i + 1, 0);

  const log = (text: string) => {
    outputRef.current = outputRef.current.length
      ? `${outputRef.current}\n${text}`
      : text;
    reRender();
  };

  const reset = () => {
    outputRef.current = "";
    reRender();
  };

  return {
    output: outputRef.current,
    log,
    reset,
  };
};
