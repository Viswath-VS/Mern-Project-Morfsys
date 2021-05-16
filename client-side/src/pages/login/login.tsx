import React, { ReactElement, useState } from "react";
import InputField from "../../components/inputField/inputField";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../images/logo.svg";
import LoginIllustration from "../../images/loginIllustration.svg";
import LoginPrimary from "../../images/loginPrimary.svg";
import LoginSecondary from "../../images/loginSecondary.svg";
import "./login.scss";
import axios from "axios";

interface Props {
  auth: any
}

const Login = ({auth}: Props): ReactElement => {
  let history = useHistory();
  const Login = async (details:object) =>{
    try {
      const userData = details;
      const res = await axios.post("http://localhost:5000/api/register",userData);
      console.log(res);
      localStorage.setItem("auth-token", res.data);
      auth();
      history.push("/");
      
    } catch (error) {
      console.log(error);
      
    }
    
  }
  return (
    <div className="login-wrapper">
      <div className="login-nav-container">
        <img src={Logo} alt="Globiliti" />
      </div>
      <div className="login-box-container">
        <div>
          <h2>Welcome to Globiliti!</h2>
          <p>Create your school account</p>
        </div>
        <InputField Login={Login} />
      </div>
      <div className="login-illustration">
        <img src={LoginIllustration} alt="illustration" />
      </div>
      <img src={LoginPrimary} alt="" className="primary" />
      <img
        src={LoginSecondary}
        alt=""
        className="secondary"
      />
    </div>
  );
};

export default Login;
