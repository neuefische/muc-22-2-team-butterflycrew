import {useEffect, useState} from "react";
import {Movie} from "../model/Movie";
import {useParams} from "react-router-dom";
import axios from "axios";
import {getImage} from "../api/image-api";

export default function Details(){

    const params = useParams()
    const [movie, setMovie] = useState<Movie>()

    const id: string | undefined = params.id

    useEffect(()=>{
        if(id){
            getMovieById(id)
        }
    },[id])

    function getMovieById(id: string){
        axios.get("/api/movies/details/"+id)
            .then(response=>response.data)
            .then(data=>{
                setMovie(data)
            })
            .catch(console.error)
    }

    return(
        <div>
            {!movie && <p>loading files...</p>}
            {movie &&
                <div>
                <h1>Name: {movie.title}</h1>
                <p>imdb ID: {movie.imdb_id}</p><br/>
                <img alt={movie.title + "pic"} src={getImage(movie.poster_path)}/>
                <p>Release: {movie.release_date}</p><br/>
                <p>Status: {movie.status}</p><br/>
                <p>Budget: {movie.budget}</p><br/>
                <article>Overview: {movie.overview}</article><br/>
                <p>Runtime: {movie.runtime}</p><br/>
                <p>Average Rating: {movie.vote_average}</p><br/>
                </div>
            }
        </div>
    )
}