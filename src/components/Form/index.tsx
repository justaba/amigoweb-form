import React, { useState } from "react";
import Input from "./input";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "./button";
import Checkbox from "./checkbox";
import Select from "./select";
import "./style.sass";

const Form: React.FC = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [language, setLanguage] = useState<string>();
  const [select, setSelect] = useState<boolean>(false);
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = () => {
    alert("Форма отправлена");
  };

  const handleInput = (name: string, value: string) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
    }
    if (value && name && email && phone && language && checkbox) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.getAttribute("data-type");
    if (value) {
      setLanguage(value);
      setSelect(!select);
    }
    if (name && email && phone && language && checkbox) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  const handleCheckbox = () => {
    const valueCheck = !checkbox;
    setCheckbox(valueCheck);
    if (name && email && phone && language && valueCheck) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  const toggleSelect = () => {
    setSelect(!select);
  };

  return (
    <Router>
      <div className="form">
        <div className="title">
          <h1>Регистрация</h1>
          <span>Уже есть аккаунт?</span>
          <Link to="/login">Войти</Link>
        </div>
        <Input
          id="name"
          title="Имя"
          placeholder="Введите Ваше имя"
          handleInput={handleInput}
          pattern={/^[A-z][a-z\s-]*$/}
        />
        <Input
          id="email"
          title="Email"
          placeholder="Введите ваш email"
          handleInput={handleInput}
          pattern={/\S+@\S+\.\S+/}
        />
        <Input
          id="phone"
          title="Номер телефона"
          placeholder="Введите номер телефона"
          handleInput={handleInput}
          pattern={/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/}
        />
        <Select
          handleSelect={handleSelect}
          toggleSelect={toggleSelect}
          select={select}
          language={language}
        />
        <Checkbox
          active={checkbox}
          handleCheck={handleCheckbox}
          id="conditions"
        />
        <Button handleSubmit={handleSubmit} active={success} />
      </div>
    </Router>
  );
};

export default Form;
