import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../img/ Butterfly_ohne_Schrift.png"
import "./NavBar.css"

export default function NavBar() {

    return (
        <nav className={"navbar"}>
            <div className={"logo"}>
                <img src={logo} alt = 'logo'/>
                <NavLink className={"NavLink"} to={"/"}>Home</NavLink>
                <NavLink className={"NavLink"} to={"/movies"}>Movies</NavLink>

            </div>
        </nav>
    )

}



