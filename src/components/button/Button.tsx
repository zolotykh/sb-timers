import React from "react";
import { memo, FC } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
  text: string;

  onClick?(): void;
}

const ButtonComp: FC<IButtonProps> = ({ text, onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export const Button = memo(ButtonComp);
