import {MovieToExchange} from "../model/MovieToExchange";
import axios from "axios";
import MovieExchangeForm from "./MovieExchangeForm";
import {useEffect, useState} from "react";
import MovieExchangeGallery from "./MovieExchangeGallery";

export default function MovieExchangeApp(){

    const [exchangeMovies, setExchangeMovies]=useState<MovieToExchange[]>([])

    useEffect(()=>{
        getExchangeMovies()
    },[])

    function getExchangeMovies() {
        axios.get("/api/exchange").then((response)=>{
            setExchangeMovies(response.data)
        })
            .catch(e=>console.error(e))
    }

    const addExchangeMovie = (newMovie: MovieToExchange) =>{

        axios.post("/api/exchange", newMovie).then(getExchangeMovies).catch(e=>console.error(e))

    }

    function removeMovie(id?: string) {
        axios.delete(`/api/exchange/${id}`)
            .then(() => {
                setExchangeMovies(prevState => {
                    return prevState.filter((exchangeMovie) => exchangeMovie.id !== id
                    )
                })
            })
    }


    return(
        <div>
            <MovieExchangeForm addMovie={addExchangeMovie}/>
            <MovieExchangeGallery deleteMovie={removeMovie}  movies={exchangeMovies}/>
        </div>
    )
}