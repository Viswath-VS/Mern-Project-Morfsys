import React, { ReactElement, useState, useEffect } from "react";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import axios from "axios";
import { Switch, Route,Redirect } from "react-router-dom";
// import auth from "../route/auth";

const App = (): ReactElement => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const auth = async () => {
    let token = localStorage.getItem("auth-token");
    console.log(token);
    const res = await axios.post("http://localhost:5000/api/auth",null,{headers:{authorization:token}});
    console.log(res);
    
    if (res.status === 200) {
      setIsAuthenticated(true);
    } else setIsAuthenticated(false);
  };

  useEffect(() => {
    auth();
  }, []);

  return (
    <div className="app-wrapper">
      <Switch>
        <Route path="/login">{!isAuthenticated ? <Login auth={auth} /> : <Redirect to="/" />}</Route>
        <Route>{isAuthenticated ? <Home /> : <Redirect to="/login" />}</Route>
      </Switch>
    </div>
  );
};

export default App;
