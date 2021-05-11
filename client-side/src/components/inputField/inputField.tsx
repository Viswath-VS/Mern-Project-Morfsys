import React, { ReactElement } from "react";
import "./inputField.scss";
type Props = {
    label: string,
    name: string,
    placeholder: string,
    type:string
}
const InputField = ({label, name, placeholder, type}:Props):ReactElement => {
  return (
    <div className="form-elements">
      <label htmlFor={label} >{label}</label>
      <div className="input-container">
      <input
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
    </div>
  );
};

export default InputField;

// style={{display:display}}