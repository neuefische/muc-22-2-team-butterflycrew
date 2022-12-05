import {useEffect, useState} from "react";
import {Movie} from "../model/Movie";
import {useParams} from "react-router-dom";
import axios from "axios";
import {getImage} from "../api/image-api";
import "./Details.css"

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
        <div className={"detailsOverview"}>
            {!movie && <p>loading files...</p>}
            {movie &&

                    <div className={"movieOverview"}>
                        <img className={"moviePicture"} alt={movie.title + "pic"} src={getImage(movie.poster_path)}/>
                        <h1> {movie.title}</h1>
                        <p>Originaltitel: {movie.original_title}</p>
                        <p>Release: {movie.release_date}</p>
                        <p>Populatität: {movie.popularity}</p>
                        <p>Average Rating: {movie.vote_average}</p>

                        {movie.overview &&
                            <article><h3>Beschreibung:</h3>{movie.overview}</article>}
                    </div>

            }
        </div>
    )
}