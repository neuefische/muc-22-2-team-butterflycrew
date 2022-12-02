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
                <h1> {movie.title}</h1>
                <img alt={movie.title + "pic"} src={getImage(movie.poster_path)}/>
                <p>Originaltitel: {movie.original_title}</p>
                <p>Release: {movie.release_date}</p><br/>
                <p>Populatität: {movie.popularity}</p><br/>
                <p>Average Rating: {movie.vote_average}</p><br/>
                    <article> {movie.overview}</article>
                </div>
            }
        </div>
    )
}