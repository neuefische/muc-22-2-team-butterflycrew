import {Movie} from "../model/Movie";
import {useNavigate} from "react-router-dom";
import {getImage} from "../api/image-api";
import * as React from "react";
import "./MovieCard.css"

export type MovieCardProps = {
    movie: Movie
}

export default function MovieCard(props: MovieCardProps) {

    const navigate = useNavigate()

    function handleDetailsClick(){
        navigate("/details/" + props.movie.id)
    }

    return (
        <div className="col">
            <div className="card border-0 movieCard" onClick={handleDetailsClick}>
                <img src={getImage(props.movie.poster_path)} className="card-img-top rounded-start rounded-end" alt={props.movie.title + " Poster"} />
                <div className={"card-img-overlay movieOverlay"}>
                </div>
            </div>
        </div>
    )
}