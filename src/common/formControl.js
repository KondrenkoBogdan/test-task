import React from "react";
import s from "./formControl.module.css";
import {EyeOutlined, EyeInvisibleOutlined} from '@ant-design/icons';

export const inputField = ({ meta, input, ...props }) => {

    let isError = meta.touched && meta.error;
    let selected = meta.active;

    return (
        <div >
            <input {...input} {...props} className={s.myInfoInput + " " + (selected ? s.selected : null)+ " " + (isError ? s.error : null )} />
            {props.atribute==="password" || props.atribute==="text"  ? <span className={s.toggleButton} onClick={() => {props.toggleVisible();}}><EyeInvisibleOutlined style={{color: "white"}} /></span> : null}
            {isError ? <div style={{color: "rgba(255, 0, 0, 0.5)", fontWeight: "700", fontSize: "15px"}}>{meta.error}</div> : null}
        </div>
    )
}