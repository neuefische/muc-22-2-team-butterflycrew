import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../img/1.png"
import "./NavBar.css"

export default function NavBar() {

    return (
        <nav className={"navbar"}>
            <div className={"logo"}>
                <img src={logo} alt = 'logo'/>
                <span>Logo</span>
            </div>
            <div>

                <NavLink className={"NavLink"} to={"/"}>Home</NavLink>
                <NavLink className={"NavLink"} to={"/movies"}>Character</NavLink>
            </div>
        </nav>
    )

}



