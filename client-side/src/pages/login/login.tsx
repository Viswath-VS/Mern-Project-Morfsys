import React, { ReactElement } from "react";
import InputField from "../../components/inputField/inputField";
import Button from "../../components/buttons/button";
import { inputFieldRows } from "../../types/dataModels";
import "./login.scss";

interface Props {}

const Login = ({}: Props): ReactElement => {
  return (
    <div className="login-wrapper">
      <div className="login-nav-container">
        <img src="../../../public/logo.svg" alt="Globiliti" />
      </div>
      <div className="login-box-container">
        <div>
          <h2>Welcome to Globiliti!</h2>
          <p>Create your school account</p>
        </div>
        {inputFieldRows.map(({ label, name, placeholder, type },key) => {
          return (
            <InputField
              label={label}
              name={name}
              placeholder={placeholder}
              type={type}
              key={key}
            />
          );
        })}
        <div className="button-container">
          <Button name="CREATE ACCOUNT" className="login-btn" path="/" />
        </div>
      </div>
      <div className="login-illustration">
        <img src="../../../public/loginIllustration.svg" alt="illustration" />
      </div>
      <img src="../../../public/loginPrimary.svg" alt="" className="primary" />
      <img
        src="../../../public/loginSecondary.svg"
        alt=""
        className="secondary"
      />
    </div>
  );
};

export default Login;
