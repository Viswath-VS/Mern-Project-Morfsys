import React, { ReactElement } from "react";
import "./button.scss";
import { useHistory } from "react-router-dom";
import {buttonProps} from "../../types/proptype";

const Button = ({ name, className, path, type, formId }: buttonProps): ReactElement => {
  const history = useHistory();
  return (
    <button
     type={type}
     form={formId}
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
