import * as React from 'react';
import {UpcomingMovie} from "../model/UpcomingMovie";
import {getImage} from "../api/image-api";
import {useNavigate} from "react-router-dom";

type UpcomingMovieProps = {
    upcomingMovie: UpcomingMovie
}

export default function UpcomingMovieComponent(props: UpcomingMovieProps){

    const navigate = useNavigate()
    function handleOnClick(){
        navigate("/details/" + props.upcomingMovie.id)
    }

    return(
        <div className={"upcomingMovieComponent"}>
            <img src={getImage(props.upcomingMovie.poster_path)} alt={props.upcomingMovie.title}/>
            <h1>{props.upcomingMovie.title}</h1>
            <h4>Release Date: {props.upcomingMovie.release_date}</h4>
            <p>{props.upcomingMovie.overview}</p>
            <button onClick={handleOnClick}>Details</button>
        </div>
    )
}