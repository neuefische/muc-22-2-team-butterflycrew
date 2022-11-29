import NextMovies from "./NextMovies";
import {useEffect, useState} from "react";
import axios from "axios";
import {NextMovie} from "../model/NextMovie";

export default function Home(){

    const [nextMovies, setNextMovies] = useState<NextMovie[]>([])

    useEffect(() => {
        getNextMovies()
    }, [])

    function getNextMovies(){
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=541894e58c6ae639dc89b9c8e73a5cf8&language=de")
            .then((response) => {
                console.log(response)
                setNextMovies(response.data.results)
            })
            .catch(error => console.error(error));
    }

    return(
        <NextMovies nextMovies={nextMovies}/>
    )
}