import React, { ReactElement } from "react";
import "./button.scss";
import { useHistory } from "react-router-dom";
interface buttonProps {
  name: string,
  className: string,
  path?: string,
  type?:any,
  formId?:string
}

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
