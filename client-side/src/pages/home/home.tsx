import Navbar from "components/navbar/navbar";
import SideNav from "components/sideNav/sideNav";
import React, { ReactElement } from "react";
import "./home.scss";
interface Props {}
const Home = ({}: Props): ReactElement => {
  return (
    <div className="home-wrapper">
       <SideNav />
      <div className="home-body-wrapper">
          <Navbar/>
      </div>
    </div>
  );
};

export default Home;
