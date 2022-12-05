import {TopRatedMovie} from "../model/TopRatedMovie";
import {getImage} from "../api/image-api";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import "./TopRatedMovieComponent.css"

type TopRatedMovieComponentProps = {
    topRatedMovie: TopRatedMovie
}

export default function TopRatedMovieComponent(props: TopRatedMovieComponentProps){

    const navigate = useNavigate()
    function handleDetailsClick(){
        navigate("/details/" + props.topRatedMovie.id)
    }

    return(
        <div className="col">
            <div className="card border-0 topRatedMovieCard" onClick={handleDetailsClick}>
                <img src={getImage(props.topRatedMovie.poster_path)} className="card-img-top rounded-start rounded-end" alt={props.topRatedMovie.title + " Poster"} />
                <div className={"card-img-overlay topRatedMovieOverlay"}>
                    <button className={"btn btn-info disabled"}>Rating: {props.topRatedMovie.vote_average}</button>
                </div>
            </div>
        </div>
    )
}