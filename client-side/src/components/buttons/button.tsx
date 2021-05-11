import React, { ReactElement } from 'react'
import "./button.scss";
interface buttonProps {
    name: string,
    className: string
}

const Button = ({name,className}: buttonProps):ReactElement => {
    return (
        
            <button className={className}>{name}</button>
        
    )
}

export default Button;