import {PopularMovie} from "../model/PopularMovie";
import {getImage} from "../api/image-api";
import * as React from "react";
import {useNavigate} from "react-router-dom";

type PopularMovieComponentProps = {
    popularMovie: PopularMovie
}

export default function PopularMovieComponent(props: PopularMovieComponentProps){

    const navigate = useNavigate()
    function handleOnClick(){
        navigate("/details/" + props.popularMovie.id)
    }

    return(
        <div className="card h-auto">
            <img src={getImage(props.popularMovie.poster_path)} className="card-img-top" alt={props.popularMovie.title} />
            <div className="card-body">
                <h5 className="card-title">{props.popularMovie.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.popularMovie.popularity}</h6>
                <p className="card-text">
                    {props.popularMovie.overview.slice(0, 100)}
                    <button className={"btn btn-info mx-2"} onClick={handleOnClick}>Details</button>
                </p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Genres:{props.popularMovie.genre_ids}</small>
            </div>
        </div>
    )
}