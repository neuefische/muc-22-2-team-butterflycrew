import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../img/ Butterfly_ohne_Schrift.png"
import "../font/Amsterdam.ttf"
import "./NavBar.css"
import Login from "../Login";
import useUser from "../hooks/useUser";

export default function NavBar() {

    const {login}= useUser()

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

                    <a type="button" className="NavLink me-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Login
                    </a>
                    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <Login login={login} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavLink className={"NavLink"} to={"/login"}>Login</NavLink>
                    <NavLink className={"NavLink"} to={"/exchange"}>Exchange</NavLink>
                </div>
            </nav>

        </div>
    )
}