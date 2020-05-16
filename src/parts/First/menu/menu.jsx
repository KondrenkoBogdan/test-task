import React from "react";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import CalendarOutlined from "@ant-design/icons/lib/icons/CalendarOutlined";
import BarsOutlined from "@ant-design/icons/lib/icons/BarsOutlined";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import DollarCircleOutlined from "@ant-design/icons/lib/icons/DollarCircleOutlined";
import s from "./menu.module.css";
import {NavLink} from "react-router-dom";


const Menu = () => {
    return (<>
        <div className={s.menu} style={{background: "#006D75"}}>

            <div className={s.headerOfMenu}><span className={s.icon}><DollarCircleOutlined/></span>Balance</div>

            <NavLink to="/">
                <div className={s.menuItem}><span className={s.icon}><BarsOutlined/></span>Orders<span
                    className={s.orders}><DownOutlined/></span>
                </div>
            </NavLink>

            <NavLink to="/">
                <div className={s.menuItem}><span className={s.icon}><UserOutlined/></span>My info</div>
            </NavLink>

            <NavLink to="/">
                <div className={s.menuItem}><span className={s.icon}><CalendarOutlined/></span>Schedule</div>
            </NavLink>
        </div>
    </>)
}
export default Menu;