import UpcomingMovieGallery from "./UpcomingMovieGallery";
import {useEffect, useState} from "react";
import {UpcomingMovie} from "../model/UpcomingMovie";
import axios from "axios";
import {TopRatedMovie} from "../model/TopRatedMovie";
import TopRatedMovieGallery from "./TopRatedMovieGallery";


export default function Home(){

    const [upcomingMovies, setUpcomingMovies] = useState<UpcomingMovie[]>([])
    const [topratedMovies, setTopratedMovies] = useState<TopRatedMovie[]>([])


    useEffect(() => {
        getUpcomingMovies()
        getTopratedMovies()
    }, [])

    function getUpcomingMovies(){
        axios.get("/api/movies/upcoming-movies")
            .then((response) => {

                setUpcomingMovies(response.data)
            })
            .catch(e => console.error(e))
    }
    function getTopratedMovies(){
        axios.get("/api/movies/toprated-movies")
            .then((response) => {
                setTopratedMovies(response.data)
            })
            .catch(e=> console.error(e))
    }

    return(
        <div className={"container-xl"}>
            <h1>Upcoming Movies</h1>
            <UpcomingMovieGallery upcomingMovies={upcomingMovies} />

    <h1>Toprated Movies</h1>
    <TopRatedMovieGallery topRatedMovies={topratedMovies} />
        </div>
    )
}