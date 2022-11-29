import * as React from 'react';
import {UpcomingMovie} from "../model/UpcomingMovie";
import {getImage} from "../api/image-api";
import {useNavigate} from "react-router-dom";
import "./UpcomingMovieComponent.css"
import {useEffect, useState} from "react";
import axios from "axios";

type UpcomingMovieProps = {
    upcomingMovie: UpcomingMovie
}

export default function UpcomingMovieComponent(props: UpcomingMovieProps){

    const navigate = useNavigate()
    function handleOnClick(){
        navigate("/details/" + props.upcomingMovie.id)
    }

    const [genres, setGenres] = useState<string[]>([])

    useEffect(() => {
        getGenre()
    }, [])

    function getGenre(){
        axios.get("https://api.themoviedb.org/" + props.upcomingMovie.id + "/genre/movie/list?api_key=541894e58c6ae639dc89b9c8e73a5cf8&language=de")
            .then((response) => {
                setGenres(response.data)
            })
            .catch(e => console.log(e))
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
                    <small className="text-muted">{genres}</small>
                </div>
        </div>
    )
}