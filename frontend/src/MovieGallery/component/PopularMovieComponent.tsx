import {PopularMovie} from "../model/PopularMovie";
import {getImage} from "../api/image-api";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import "./PopularMovieComponent.css"

type PopularMovieComponentProps = {
    popularMovie: PopularMovie
}

export default function PopularMovieComponent(props: PopularMovieComponentProps){

    const navigate = useNavigate()
    function handleDetailsClick(){
        navigate("/details/" + props.popularMovie.id)
    }

    return(
        <div className="col">
            <div className="card border-0 popularMovieCard" onClick={handleDetailsClick}>
                <img src={getImage(props.popularMovie.poster_path)} className="card-img-top rounded-start rounded-end" alt={props.popularMovie.title + " Poster"} />
                <div className={"card-img-overlay popularMovieOverlay"}>
                    <button className={"btn btn-info disabled"}>Popularity: {props.popularMovie.popularity}</button>
                </div>
            </div>
        </div>
    )
}