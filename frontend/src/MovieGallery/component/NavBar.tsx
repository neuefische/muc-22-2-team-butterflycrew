import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../img/ Butterfly_ohne_Schrift.png"
import "../font/Amsterdam.ttf"
import "./NavBar.css"

export default function NavBar() {

    return (
        <div>
            <nav className={"navbar"}>
                <div className={"logo"}>
                    <img src={logo} alt='logo'/>
                    <h1 className={"logoname"}>Butterfly Movies</h1>
                </div>
                <div className={"navigation"}>
                    <NavLink className={"NavLink"} to={"/"}>Home</NavLink>
                    <NavLink className={"NavLink"} to={"/movies"}>Movies</NavLink>
                    <NavLink className={"NavLink"} to={"/börse"}>Börse</NavLink>
                    <form className="d-flex mx-5" role="search">
                        <input className="form-control me-2 searchbar" type="search" placeholder="Search" aria-label="Search"/>

                        <button className="btn btn-outline-secondary" type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>

                    </form>
                </div>
            </nav>

        </div>
    )
}