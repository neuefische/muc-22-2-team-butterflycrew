import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../img/ Butterfly_ohne_Schrift.png"
import "./NavBar.css"


export default function NavBar() {


    return (
        <nav className={"navbar"}>

            <div className={"logo"}>
                <h1 className={"logoname"}>Butterfly Movies</h1>
                <img src={logo} alt = 'logo'/>

                <div className={"navbar"}>
                <NavLink className={"NavLink"} to={"/"}>Home</NavLink>
                <NavLink className={"NavLink"} to={"/movies"}>Movies</NavLink>
                </div>

            </div>
        </nav>
    )

}



