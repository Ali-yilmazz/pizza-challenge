import React from "react";
import "./Button.css";

export default function Button({
    className = "",
    onClick,
    children,
    type = "button",
    disabled = false
}) {

    return (<button type={type} className={`button ${className}`} onClick={onClick} disabled={disabled}>
        {children} </button>
    )
}