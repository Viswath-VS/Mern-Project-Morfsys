import React from "react";
import "./card.scss";
import Button from "../buttons/button";
interface Props {
  title: string;
  buttonName: string;
  Icon: any;
  iconName: string;
  ToolIcon: any;
  toolText: string;
  img: string;
  className: string;
  text: string;
  key: any;
}

const Card = ({
  title,
  Icon,
  iconName,
  ToolIcon,
  buttonName,
  toolText,
  img,
  className,
  text,
  key,
}: Props) => {
  return (
    <div key={key} className="card-item-impact">
      <h3 className="card-item-title">{title}</h3>
      <div className="card-item-btn">
        <Button name={buttonName} className={className} />
      </div>
      <div className="card-item-profile">
        <div className="card-item-profile-icons">
          <Icon />
          <p>{iconName}</p>
        </div>
        <div className="card-item-profile-icons">
          <ToolIcon />
          <p>{toolText}</p>
        </div>
      </div>
      <div className="card-item-profile">
        <img src={img} alt="Avatar" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
