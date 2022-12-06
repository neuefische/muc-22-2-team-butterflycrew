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
                        <p> XXL Road</p>
                        <p>Jùpiterfield, Mars</p>
                        <p>blablabla, ZIP <br/>
                            54584 Space</p>
                        <p className={"email-id"}>mmvs@space.com</p>
                        <h5>+49 - 9846546</h5>
                    </div>
                    <div className={"col"}>
                        <h3>Links <div className={"underline"}><span></span></div></h3>
                        <ul>
                            <li><a href={""}>Home</a></li>
                            <li><a href={""}>About Us</a></li>
                            <li><a href={""}>Impressum</a></li>
                            <li><a href={""}>Datenschutz</a></li>
                            <li><a href={""}>AGB</a></li>
                        </ul>
                    </div>
                    <div className={"col"}>
                        <h3>Help <div className={"underline"}><span></span></div></h3>
                        <ul>
                            <li><a href={""}>Support</a></li>
                            <li><a href={""}>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className={"col social-icons"}>
                        <h3>Social-Media <div className={"underline"}><span></span></div></h3>
                        <ul>
                            <li><i className="fa-brands fa-facebook"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-twitter"></i></li>
                            <li><i className="fa-brands fa-youtube"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>


    )
}