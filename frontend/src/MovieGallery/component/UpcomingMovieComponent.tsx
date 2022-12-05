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
    function handleDetailsClick(){
        navigate("/details/" + props.upcomingMovie.id)
    }

    function parseDate(input: string) {
        const parts = input.split("-")
        const year = parseInt(parts[0])
        const month = parseInt(parts[1])-1
        const day = parseInt(parts[2])
        return new Date(year, month, day).toLocaleDateString("de-DE")
    }

    return(
        <div className="col">
            <div className="card h-100">
                <img src={getImage(props.upcomingMovie.poster_path)} className="card-img rounded-start rounded-end" alt={props.upcomingMovie.title + " Poster"} onClick={handleDetailsClick} />
            </div>
            <i className="fa-solid fa-star"></i>
        </div>
    )
}