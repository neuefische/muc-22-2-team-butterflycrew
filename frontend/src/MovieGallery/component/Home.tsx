import UpcomingMovieGallery from "./UpcomingMovieGallery";
import {useEffect, useState} from "react";
import {UpcomingMovie} from "../model/UpcomingMovie";
import axios from "axios";
import TopRatedMovieGallery from "./TopRatedMovieGallery";
import {TopRatedMovie} from "../model/TopRatedMovie";

export default function Home(){

    const [upcomingMovies, setUpcomingMovies] = useState<UpcomingMovie[]>([])
    const [topRatedMovies, setTopRatedMovies] = useState<TopRatedMovie[]>([])
    const [popularMovies, setPopularMovies] = useState<PopularMovie[]>([])

    useEffect(() => {
        getUpcomingMovies()
        getTopRatedMovies()
        getPopularMovies()
    }, [])

    function getUpcomingMovies(){
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=541894e58c6ae639dc89b9c8e73a5cf8&language=de")
            .then((response) => {
                setUpcomingMovies(response.data.results)
            })
            .catch(e => console.error(e))
    }

    function getTopRatedMovies() {
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=541894e58c6ae639dc89b9c8e73a5cf8&language=de")
            .then((response) => {
                setTopRatedMovies(response.data.results)
            })
            .catch(e => console.error(e))
    }

    function getPopularMovies(){
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=541894e58c6ae639dc89b9c8e73a5cf8&language=de")
            .then((response) => {
                setPopularMovies(response.data.results)
            })
            .catch(e => console.error(e))
    }

    return(
        <div className={"container-xl"}>
            <h1>Upcoming Movies</h1>
            <UpcomingMovieGallery upcomingMovies={upcomingMovies} />
            <h1>Top Rated Movies</h1>
            <TopRatedMovieGallery topRatedMovies={topRatedMovies} />
            <h1>Popular Movies</h1>
        </div>
    )
}