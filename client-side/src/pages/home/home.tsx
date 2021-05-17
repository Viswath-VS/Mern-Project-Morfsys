import React, { ReactElement } from "react";
import Navbar from "components/navbar/navbar";
import SideNav from "components/sideNav/sideNav";
import {
  cardItemImpact,
  cardItemTool,
  cardItemLearn,
} from "../../types/dataModels";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import "./home.scss";
import Card from "components/card/card";
import {homeProps} from "../../types/proptype";
const Home = ({auth}: homeProps): ReactElement => {
  return (
    <div className="home-wrapper">
      <SideNav auth={auth} />
      <div className="home-body-wrapper">
        <Navbar />
        <div className="body-content-wrapper">
          <div className="body-column">
            <div className="body-section-title">
              <h3>Impact Campaigns</h3>
              <div className="body-section-title-icon">
                <AddRoundedIcon />
                <MoreHorizRoundedIcon />
              </div>
            </div>
            {cardItemImpact.map(
              (
                {
                  title,
                  Icon,
                  iconName,
                  ToolIcon,
                  buttonName,
                  toolText,
                  img,
                  className,
                  text,
                },
                key
              ) => {
                return (
                  <Card
                    key={key}
                    title={title}
                    Icon={Icon}
                    iconName={iconName}
                    ToolIcon={ToolIcon}
                    buttonName={buttonName}
                    toolText={toolText}
                    img={img}
                    className={className}
                    text={text}
                  />
                );
              }
            )}
          </div>
          <div className="body-column">
            <div className="body-section-title">
              <h3>Learning Tools</h3>
              <div className="body-section-title-icon">
                <AddRoundedIcon />
                <MoreHorizRoundedIcon />
              </div>
            </div>
            {cardItemLearn.map(({ title, img, description }, key) => {
              return (
                <div key={key} className="card-item-learn">
                  <img src={img} alt="" />
                  <div className="card-item-learn-details">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="body-column">
            <div className="body-section-title">
              <h3>Tool Pilots</h3>
              <div className="body-section-title-icon">
                <AddRoundedIcon />
                <MoreHorizRoundedIcon />
              </div>
            </div>
            {cardItemTool.map(
              (
                {
                  title,
                  Icon,
                  iconName,
                  ToolIcon,
                  buttonName,
                  toolText,
                  img,
                  className,
                  text,
                },
                key
              ) => {
                return (
                  <Card
                    key={key}
                    title={title}
                    Icon={Icon}
                    iconName={iconName}
                    ToolIcon={ToolIcon}
                    buttonName={buttonName}
                    toolText={toolText}
                    img={img}
                    className={className}
                    text={text}
                  />
                );
              }
            )}
          </div>
          <div className="body-column">
            <div className="body-section-title">
              <h3>Design Learning Pods</h3>
              <div className="body-section-title-icon">
                <AddRoundedIcon />
                <MoreHorizRoundedIcon />
              </div>
            </div>
            <div className="body-column-space">
              <h3>New Learning Pod</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
