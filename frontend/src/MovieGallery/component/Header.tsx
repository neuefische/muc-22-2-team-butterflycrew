import NavBar from "./NavBar";
import bg from '../img/StarWars.jpg'
import "./Header.css"
import {ChangeEvent, useState, KeyboardEvent} from "react";

export default function Header(){

    const [value, setValue] = useState<string>("")

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    function handleSearchText(){
        console.log(value)
    }

    const handleOnKeyboardEvent = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            handleSearchText()
        }
    }

    return(
        <div>
            <NavBar/>
            <div className="card-width card text-bg-dark">
                <img src={bg} className="card-img" alt="Background"/>
                    <div className="card-img-overlay header1">
                        <h2 className="card-title title1">Welcome.</h2>
                        <h4 className="card-text pb-2 title2">Discover millions of movies...</h4>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" value={value} onChange={onChangeValue} onKeyUp={handleOnKeyboardEvent} />
                            <button className={"btn btn-secondary"} onClick={handleSearchText}><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
            </div>
        </div>
    )
}



