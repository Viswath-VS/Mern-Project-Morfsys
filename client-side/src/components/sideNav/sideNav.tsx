import React from "react";
import "./sideNav.scss";
import {
  sideNavBottomItems,
  sideNavMiddleItems,
  sideNavTopItems,
} from "../../types/dataModels";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../../images/logo.svg";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { useHistory } from "react-router-dom";


const SideNav = () => {
  const history = useHistory();
  const handleLogout = ()=>{
    return history.push("/");
  }
 
  return (
    <div className="side-nav-wrapper">
      <div className="side-nav-logo">
        <img src={Logo} alt="Globiliti" />
        <MenuIcon className="menu" />
      </div>
      <div className="side-nav-top">
        {sideNavTopItems.map(({ Icons, name }, key) => {
          return (
            <div key={key} className="side-nav-top-options">
              <Icons />
              <h3>{name}</h3>
            </div>
          );
        })}
      </div>
      <div className="side-nav-middle">
        <div className="side-nav-middle-title">
          <h3>Add Team Members</h3>
          <AddCircleRoundedIcon />
        </div>
        {sideNavMiddleItems.map(({ img, name, role }, key) => {
          return (
            <div key={key} className="side-nav-middle-options">
              <img src={img} alt="Avatar" />
              <div className="side-nav-role-detail">
                <h3>{name}</h3>
                <p>{role}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="side-nav-bottom">
        {sideNavBottomItems.map(({ Icon, name, path }, key) => {
          return (
            <div
              key={key}
              className="side-nav-bottom-options"
              onClick={() => {
                if (path) {
                  localStorage.clear();
                  handleLogout()
                }
              }}
            >
              <Icon />
              <h3>{name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
