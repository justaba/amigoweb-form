import React, { MouseEventHandler, ReactNode } from "react";
import "./style.sass";

interface IProps {
  active: boolean;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

const Button: React.FC<IProps> = ({ active, handleSubmit, children }) => {
  return (
    <button onClick={handleSubmit} className="btn" disabled={!active}>
      Зарегистрироваться
    </button>
  );
};

export default Button;
