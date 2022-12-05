import MovieGallery from "./MovieGallery";
import {useEffect, useState} from "react";
import {Movie} from "../model/Movie";
import axios from "axios";

export default function MovieApp(){

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        getMovies()
    }, [])

    function getMovies(){
        axios.get("/api/movies")
            .then((response) => {
                setMovies(response.data)
            })
            .catch(e => console.error(e))
    }

    return(
        <div>
            <MovieGallery movieList={movies}/>
        </div>
    )
}