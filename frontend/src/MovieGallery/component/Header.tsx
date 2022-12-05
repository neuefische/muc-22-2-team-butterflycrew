import NavBar from "./NavBar";
import bg from '../img/StarWars.jpg'
import "./Header.css"
import React from "react";

export default function Header(){

    return(
        <div>
            <NavBar/>
            <div className="card-width card text-bg-dark">
                <img src={bg} className="card-img" alt="Background"/>
                    <div className="card-img-overlay header1">
                        <h2 className="card-title title1">Welcome.</h2>
                        <h4 className="card-text pb-2 title2">Discover millions of movies...</h4>

                        <form className="d-flex  w-50 mx-5" role="search">
                            <input className="form-control me-3 searchbar" type="search" placeholder="Start searching..." aria-label="Search"/>

                            <button className="btn btn-primary" type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>

                        </form>
                    </div>

            </div>
        </div>
    )
}



