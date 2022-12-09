import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../img/ Butterfly_ohne_Schrift.png"
import "../font/Amsterdam.ttf"
import "./NavBar.css"
import LoginModal from "./LoginModal";
import useUser from "../hooks/useUser";

type NavBarProps = {
    login: (username: string, password: string) => Promise<string>
}

export default function NavBar(props: NavBarProps) {

    const {username, logout} = useUser()

    function showLogOut() {
        if (username === "Mousse au chocolate!") {
            return (<a href={"#"} type="button" className="NavLink me-1"
                       data-bs-toggle="modal"
                       data-bs-target="#exampleModal">
                Login
            </a>)
        }
        return (<a href={"#"} onClick={logout} type="button" className="NavLink me-1"> Logout</a>)
    }

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
                    <NavLink className={"NavLink"} to={"/exchange"}>Exchange</NavLink>
                    {
                        showLogOut()
                    }
                    <LoginModal openLoginModal={false} login={props.login}/>

                </div>
            </nav>

        </div>
    )
}