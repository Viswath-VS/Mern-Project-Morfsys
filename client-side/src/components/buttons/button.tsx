import React, { ReactElement } from "react";
import "./button.scss";
import { useHistory } from "react-router-dom";
interface buttonProps {
  name: string;
  className: string;
  path?: string;
}

const Button = ({ name, className, path }: buttonProps): ReactElement => {
  const history = useHistory();
  return (
    <button
      onClick={() => {
        history.push(path);
      }}
      className={className}
    >
      {name}
    </button>
  );
};

export default Button;
