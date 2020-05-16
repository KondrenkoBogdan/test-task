import React from "react";
import {NavLink} from "react-router-dom";

const Home = () => {
    return(<>
        <NavLink to={"/first"}>TO FIRST PAGE</NavLink>
        <br/>
        <NavLink to={"/second"}>TO SECOND PAGE</NavLink>
    </>)
}

export default Home;