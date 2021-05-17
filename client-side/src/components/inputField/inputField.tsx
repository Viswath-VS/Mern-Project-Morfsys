import React, { ReactElement, useState } from "react";
import Button from "../buttons/button";
import "./inputField.scss";
import {inputFieldProps} from "../../types/proptype";

const InputField = ({Login}: inputFieldProps): any => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e:any) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form className="form-wrapper" id="loginForm" onSubmit={submitHandler}>
      <div className="form-elements">
        <label htmlFor="name">What's your full name?</label>
        <div className="input-container">
          <input name="name" placeholder="enter your name" onChange={e => setDetails({...details, name:e.target.value}) } value={details.name} type="text"  />
        </div>
      </div>  
      <div className="form-elements">
        <label htmlFor="email">Email</label>
        <div className="input-container">
          <input name="email" placeholder="email" onChange={e => setDetails({...details, email:e.target.value}) } value={details.email} type="text" />
        </div>
      </div>
      <div className="form-elements">
        <label htmlFor="password">Password</label>
        <div className="input-container">
          <input name="password" placeholder="enter your password" onChange={e => setDetails({...details, password:e.target.value}) } value={details.password} type="password" />
        </div>
      </div>
      <div className="button-container">
        <Button formId ="loginForm" name="CREATE ACCOUNT" className="login-btn" type="submit" />
      </div>
    </form>
  );
};

export default InputField;
