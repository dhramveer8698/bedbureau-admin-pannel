import React from 'react';


const Button = ({
    buttonStyle,
    labelstyle,
    label,
    value,
    type,
    valueStyle,
    ...props

}) => {
  return (
    <button
    {...props} 
    type="button" 
    className={"btn btn-primary btn-lg" + buttonStyle }>
     <label className={labelstyle}>{label}</label>
    </button>
    )
}

export default Button;