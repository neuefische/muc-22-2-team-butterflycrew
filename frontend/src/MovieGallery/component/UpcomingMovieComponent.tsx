import * as React from 'react';
import {UpcomingMovie} from "../model/UpcomingMovie";
import {getImage} from "../api/image-api";
import {useNavigate} from "react-router-dom";
import "./UpcomingMovieComponent.css"

type UpcomingMovieProps = {
    upcomingMovie: UpcomingMovie
}

export default function UpcomingMovieComponent(props: UpcomingMovieProps){

    const navigate = useNavigate()
    function handleOnClick(){
        navigate("/details/" + props.upcomingMovie.id)
    }

    return(
        <div className="card h-auto">
            <img src={getImage(props.upcomingMovie.poster_path)} className="card-img-top" alt={props.upcomingMovie.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.upcomingMovie.title}</h5>
                    <p className="card-text">
                        {props.upcomingMovie.overview.slice(0, 100)}
                        <button className={"btn btn-info mx-2"} onClick={handleOnClick}>Details</button>
                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Genres:</small>
                </div>
        </div>
    )
}