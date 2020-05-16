import React from "react";
import s from "./mainPanel.module.css";
import {NavLink} from "react-router-dom";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";

const MainPanel = ({items, pageSelected, paginatorArray, pageChanger, pagePortion, portionsCount, portionChange}) => {
    return (<>
        <div className={s.mainPanel} style={{background: "#ccc"}}>
            <div className={s.myBalanceDiv} style={{background: "#00292E"}}><span
                className={s.balanceTitle}>MY BALANCE
                <span style={{fontSize: "50px", marginLeft: "35px", position: "relative", top: "3px"}}>$</span>
                <span style={{fontSize: "60px", marginLeft: "10px", position: "relative", top: "3px"}}>708</span>
                <span style={{fontSize: "34px", color: "#667F82"}}>,83</span>
                <NavLink className={s.makeDeposit} to="/"><span
                    className={s.makeDeposit}>Make up deposit</span></NavLink>
            </span>
            </div>
            <div className={s.tabel} style={{background: "#00474F"}}>
                <div className={s.tabelRow}><span className={s.hash}>#</span><span
                    className={s.dateTime}>Date & Time</span><span className={s.info}>Info</span><span
                    className={s.type}>Type</span><span className={s.cash}>Cash</span><span
                    className={s.status}>Status</span></div>
            </div>
            {items.map(i => {
                return (
                    <div key={i.id} className={s.tabelRow + " " + s.row}>
                        <span className={s.hash + " " + s.rowItem}>{i.id}</span>
                        <span className={s.dateTime + " " + s.rowItem}>{new Intl.DateTimeFormat("en-AU", {
                            month: "short",
                            year: "numeric",
                            day: "2-digit",
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false
                        }).format(i.dateTime)}</span>
                        <span className={s.info + " " + s.rowItem}>{i.info}</span>
                        <span className={s.type + " " + s.rowItem}>{i.type}</span>
                        <span className={s.cash + " " + s.rowItem}>{i.cash}</span>
                        <span className={s.status + " " + s.rowItem + " " + (i.status==="Error" ? s.red: null)}>{i.status}</span>
                    </div>
                )
            })}
            <div className={s.paginatorDiv}>
                <div className={s.paginator}>
                    <span className={s.showOnPage}>Show on page: <span className={s.showSelectedPage}>{pageSelected}<span className={s.bottomArch}><DownOutlined style={{fontSize: "18px"}} /></span></span></span>
                    <span className={s.paginator}>
                        {pagePortion>1 ? <span onClick={() => portionChange("minus")} className={s.paginatorArch}><LeftOutlined /></span> : null}
                        {paginatorArray.map(num => {
                            return <span onClick={() => {
                                pageChanger(num)
                            }} className={(pageSelected === num ? s.active : null) + " " + s.paginatorNum}>{num}</span>
                        })}
                        {pagePortion<portionsCount ? <span onClick={() => portionChange("plus")} className={s.paginatorArch}><RightOutlined /></span> : null}
                    </span>
                </div>
            </div>
        </div>
    </>)
}

export default MainPanel;