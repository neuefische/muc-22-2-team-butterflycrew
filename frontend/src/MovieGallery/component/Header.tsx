import NavBar from "./NavBar";
import bg from '../img/StarWars.jpg'
import "./Header.css"

type HeaderProps={
    login:(username:string, password:string)=>Promise<string>
    username:string,
    logout:() => void,

}

export default function Header(props: HeaderProps){

    return(
        <div>
            <NavBar username={props.username} logout={props.logout} login={props.login}/>
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



