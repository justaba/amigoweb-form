import React, { ReactNode, useState } from "react";
import Error from "../error/index";
import "./style.sass";

interface IProps {
  id: string;
  title: string;
  placeholder: string;
  pattern: RegExp;
  handleInput: Function;
  children?: ReactNode;
}

const Input: React.FC<IProps> = ({
  id,
  title,
  placeholder,
  handleInput,
  pattern,
  children,
}) => {
  const [error, setError] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    if (pattern.test(value)) {
      handleInput(name, value);
      setError(false);
    } else {
      handleInput(name, '');
      setError(true)
    };
  };
  return (
    <div className="input">
      <label htmlFor={id}>{title}</label>
      <input
        onChange={handleChange}
        name={id}
        id={id}
        type="text"
        placeholder={placeholder}
      />
      <div className="error-row">
        <Error active={error} />
      </div>
    </div>
  );
};

export default Input;
