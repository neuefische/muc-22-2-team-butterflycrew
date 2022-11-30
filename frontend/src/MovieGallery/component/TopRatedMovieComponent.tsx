import {TopRatedMovie} from "../model/TopRatedMovie";
import {getImage} from "../api/image-api";
import * as React from "react";
import {useNavigate} from "react-router-dom";

type TopRatedMovieComponentProps = {
    topRatedMovie: TopRatedMovie
}

export default function TopRatedMovieComponent(props: TopRatedMovieComponentProps){

    const navigate = useNavigate()
    function handleOnClick(){
        navigate("/details/" + props.topRatedMovie.id)
    }

    return(
        <div className="card h-auto">
            <img src={getImage(props.topRatedMovie.poster_path)} className="card-img-top" alt={props.topRatedMovie.title} />
            <div className="card-body">
                <h5 className="card-title">{props.topRatedMovie.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.topRatedMovie.vote_average}</h6>
                <p className="card-text">
                    {props.topRatedMovie.overview.slice(0, 100)}
                    <button className={"btn btn-info mx-2"} onClick={handleOnClick}>Details</button>
                </p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Genres:{props.topRatedMovie.genre_ids}</small>
            </div>
        </div>
    )
}