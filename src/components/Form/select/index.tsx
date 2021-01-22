import React, { ReactNode } from "react";
import "./style.sass";
import { ReactComponent as Arrow } from "./svg/arrow.svg";

interface IProps {
  handleSelect: Function;
  toggleSelect: Function;
  select: boolean;
  language: string | undefined;
  children?: ReactNode;
}

const Select: React.FC<IProps> = ({
  children,
  handleSelect,
  toggleSelect,
  select,
  language,
}) => {
  return (
    <div className="select">
      <span className="label">Язык</span>
      <div
        onClick={() => toggleSelect()}
        className={`select-main ${select ? "active" : ""}`}
      >
        <span className={select || language ? "select-span" : ""}>
          {language ? language : "Язык"}
        </span>
        <Arrow className="arrow" fill="#0880AE" width="18px" height="18px" />
      </div>
      <div className={`select-option ${select ? "" : "hide"}`}>
        <div
          onClick={(e) => handleSelect(e)}
          data-type="Русский"
          className="select-option__item"
        >
          Русский
        </div>
        <div
          onClick={(e) => handleSelect(e)}
          data-type="Английский"
          className="select-option__item"
        >
          Английский
        </div>
        <div
          onClick={(e) => handleSelect(e)}
          data-type="Китайский"
          className="select-option__item"
        >
          Китайский
        </div>
        <div
          onClick={(e) => handleSelect(e)}
          data-type="Испанский"
          className="select-option__item"
        >
          Испанский
        </div>
      </div>
    </div>
  );
};

export default Select;
