import React from "react";

import "./Footer.css"
import "../img/1.png"

export default function Footer(){

    return(
        <div>
        <head>
            <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"}/>
            <title>Footer with Animation</title>
            <link rel={"stylesheet"} href={"footer.css"}/>
        </head>
        </div>

        <body>
        <footer>
            <div className={"row"}>
                <div className={"col"}></div>
                <div className={"col"}></div>
                <div className={"col"}></div>
                <div className={"col"}></div>
            </div>
        </footer>
        </body>
    )
}