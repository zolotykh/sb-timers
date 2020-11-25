import React from "react";
import styles from "./Button.module.css";

interface IButtonProps {
  text: string;

  onClick?(): void;
}

export const Button = React.memo<IButtonProps>(({ text, onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
});
