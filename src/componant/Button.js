import React from 'react';


const Button = ({
    buttonStyle,
    labelstyle,
    srcStyle,
    label,
    imgSrc,
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
    <img className={srcStyle} src={imgSrc}></img>
     <label className={labelstyle}>{label}</label>
    </button>
    )
}

export default Button;