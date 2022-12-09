import React from "react";
import "./Footer.css"
import logo1 from "../img/1.png"

export default function Footer() {
    return (


        <footer>
            <div className={"container-fluid justify-content-around"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <img className={"footer-logo"} src={logo1} alt={"logo"}/>
                    </div>

                    <div className={"col"}>
                        <h3>Office <div className={"underline"}><span></span></div></h3>
                        <p>Mars Road</p>
                        <p>Jùpiterfield. 69 </p>
                        <p>ZIP, 54584 Space</p>
                        <p className={"email-id"}>mmvs@space.com</p>
                        <h6>+49 - 696969</h6>
                    </div>

                    <div className={"col"}>
                        <h3>Links <div className={"underline"}><span></span></div></h3>
                        <ul>
                            <li><a href={"/home"}>Home</a></li>
                            <li><a href={"/about"}>About Us</a></li>
                            <li><a href={"/home"}>Impressum</a></li>
                            <li><a href={"/home"}>Datenschutz</a></li>
                            <li><a href={"/home"}>AGB</a></li>
                        </ul>
                    </div>

                    <div className={"col"}>
                        <h3>Help <div className={"underline"}><span></span></div></h3>
                        <ul>
                            <li><a href={"/home"}>Support</a></li>
                            <li><a href={"/home"}>Contact Us</a></li>
                        </ul>
                    </div>

                    <div className={"col social-icons"}>
                        <h3>Follow Us <div className={"underline"}><span></span></div></h3>
                        <ul>
                            <li><i className="fa-brands fa-facebook"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-twitter"></i></li>
                            <li><i className="fa-brands fa-youtube"></i></li>
                        </ul>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col"}>
                        <p className={"slogan"}>Have a break, have a Movie.</p>
                    </div>
                </div>

                <hr/>
                <p className={"p1"}>Butterfly Movies© 2022 - All Rights Reserved</p>
            </div>
        </footer>
    )
}