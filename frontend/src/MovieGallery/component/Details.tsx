import {useEffect, useState} from "react";
import {Movie} from "../model/Movie";
import {useParams} from "react-router-dom";
import axios from "axios";
import {getImage} from "../api/image-api";

export default function Details(){

    const mtMovie: Movie = {
        id: "",
        imdb_id: "",
        title: "",
        genres: [],
        release_date: "",
        status: "",
        budget: 0,
        overview: "",
        runtime: 0,
        vote_average: 0,
        poster_path: ""
    }
    const params = useParams()
    const [movie, setMovie] = useState<Movie>(mtMovie)

    const id: string | undefined = params.id

    useEffect(()=>{
        if(id){
            getMovieById(id)
        }
    },[])

    function getMovieById(id: string){
        axios.get("https:localhost:3000/api/movies/"+id)
            .then(response=>response.data)
            .then(data=>{
                setMovie(data)
            })
            .catch(console.error)
    }

    function getGenre(){
       return movie.genres.map(genre =>{
            return <div>{genre.name + ", "} </div>
        })
    }

    return(
        <div>
            {!movie && <p>loading files...</p>}
            {movie &&
                <div>
                <h1>Name: {movie.title}</h1>
                <p>imdb ID: {movie.imdb_id}</p><br/>
                <img alt={movie.title + "pic"} src={getImage(movie.poster_path)}/>
                <p>Genre: {getGenre()}</p><br/>
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