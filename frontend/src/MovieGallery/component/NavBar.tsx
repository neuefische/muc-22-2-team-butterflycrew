import React from "react";
import {NavLink} from "react-router-dom";
export default function NavBar() {

    return (
        <nav className={"navbar"}>
            <div className={"logo"}>
             {/*<img onClick={...}/>   */}
            <span>Logo</span>
            </div>
            <div>
                <NavLink className={"NavLink"} to={"/"}>Home</NavLink>
                <NavLink className={"NavLink"} to={"/movies"}>Character</NavLink>
            </div>
        </nav>
)

}



