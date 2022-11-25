import {useEffect, useState} from "react";
import {Movie} from "../model/Movie";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function Details(){

    const params = useParams()
    const [movie, setMovie] = useState<Movie>()

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
            {movie &&   <div>
                            <h1>Name: {movie.title}</h1>
                            <p>imbd ID: {movie.imdb_id}</p><br/>
                            {/*<img src={movie.image}/><br/>*/}
                            <p>Genre: {getGenre()}</p><br/>
                            <p>Release: {movie.release_date}</p><br/>
                            <p>Status: {movie.status}</p><br/>
                            <p>Budget: {movie.budget}</p><br/>
                            <article>Overview: {movie.overview}</article><br/>
                            <p>Runtime: {movie.runtime}</p><br/>
                            <p>Average Rating: {movie.vote_average}</p><br/>
                        </div>}
        </div>
    )
}