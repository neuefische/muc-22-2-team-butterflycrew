import React from "react";

import "./Footer.css"
import logo from "../img/1.png"

export default function Footer(){

    return(
       <nav>
        <head>
            <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"}/>
            <title>Footer with Animation</title>
            <link rel={"stylesheet"} href={"footer.css"}/>
        </head>

       <footer>
           <div className={"row"}>
               <div className={"col"}>
                   <img src={logo} alt={"logo"}/>
                   <p>Have a break, have a Movie.</p>
               </div>

               <div className={"col"}>
                   <h3>Office</h3>
                   <p> XXL Road</p>
                   <p>Jùpiterfield, Mars</p>
                   <p>blablabla, PIN 54584 Space</p>
                   <p className={"email-id"}>mmvs@space.com</p>
                   <h4>+49 - 98465456</h4>
               </div>
               <div className={"col"}>
                   <h3>Links</h3>
                   <ul>
                       <li><a href={""}>Home</a></li>
                       <li><a href={""}>About Us</a></li>
                       <li><a href={""}>Impressum</a></li>
                       <li><a href={""}>Datenschutz</a></li>
                       <li><a href={""}>AGB</a></li>
                   </ul>
               </div>
               <div className={"col"}>
                   <h3>Help</h3>
                   <ul>
                       <li><a href={""}>Support</a></li>
                       <li><a href={""}>Contact Us</a></li>
                   </ul>
               </div>
              <div className={"social-icons"}/>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
            </div>

        </footer>

       </nav>

    )
}