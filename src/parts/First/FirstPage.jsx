import React from "react";
import s from "./FirstPage.module.css";
import Menu from "./menu/menu";
import MainPanel from "./mainPanel/mainPanel";

const FirstPage = (props) => {

    return (<>
        <div className={s.mainScreen}>
            <Menu/>
            <MainPanel  {...props}/>
        </div>
    </>)
}


export default FirstPage;