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

    function parseDate(input: string) {
        const parts = input.split("-")
        const year = parseInt(parts[0])
        const month = parseInt(parts[1])
        const day = parseInt(parts[2])
        return new Date(year, month, day).toLocaleDateString("de-DE")
    }

    return(
        <div className="card h-auto">
            <img src={getImage(props.upcomingMovie.poster_path)} className="card-img-top" alt={props.upcomingMovie.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.upcomingMovie.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{parseDate(props.upcomingMovie.release_date)}</h6>
                    <p className="card-text">
                        {props.upcomingMovie.overview.slice(0, 100)}
                        <button className={"btn btn-info mx-2"} onClick={handleOnClick}>Details</button>
                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Genres:{props.upcomingMovie.genre_ids}</small>
                </div>
        </div>
    )
}