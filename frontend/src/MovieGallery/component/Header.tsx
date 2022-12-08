import NavBar from "./NavBar";
import bg from '../img/StarWars.jpg'
import "./Header.css"

export default function Header(){

    return(
        <div>
            <NavBar/>
            <div className="card-width card text-bg-dark">
                <img src={bg} className="card-img" alt="Background"/>
                    <div className="card-img-overlay header1">
                        <h2 className="card-title title1">Welcome.</h2>
                        <h4 className="card-text pb-2 title2">Discover millions of movies...</h4>
                    </div>
            </div>
        </div>
    )
}



