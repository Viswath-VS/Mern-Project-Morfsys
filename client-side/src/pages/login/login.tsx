import React, { ReactElement, useState } from "react";
import InputField from "../../components/inputField/inputField";
import { Link, useHistory } from "react-router-dom";
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
        <img src="../../../public/logo.svg" alt="Globiliti" />
      </div>
      <div className="login-box-container">
        <div>
          <h2>Welcome to Globiliti!</h2>
          <p>Create your school account</p>
        </div>
        <InputField Login={Login} />
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
