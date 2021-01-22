import React, { ReactNode } from "react";
import "./style.sass";

interface IProps {
  active: boolean;
  children?: ReactNode;
}

const Error: React.FC<IProps> = ({ active, children }) => {
  if (active) {
    return <span className="error">Введено не корректное значение</span>;
  } else return null;
};

export default Error;
