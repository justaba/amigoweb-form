import React, { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import "./style.sass";
import { ReactComponent as Checkmark } from "./svg/check.svg";

interface IProps {
  id: string;
  active: boolean;
  handleCheck: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
}

const Checkbox: React.FC<IProps> = ({ id, active, handleCheck, children }) => {
  return (
    <div className="checkbox">
      <div onClick={handleCheck} className={`check ${active ? `active` : ""} `}>
        <Checkmark
          className={`${active ? "" : "hide"}`}
          fill="#0880AE"
          width="18px"
          height="18px"
        />
      </div>
      <label htmlFor={id}>
        Принимаю{" "}
        <Link className="bold" to="/politics">
          условия
        </Link>{" "}
        использования
      </label>
    </div>
  );
};

export default Checkbox;
