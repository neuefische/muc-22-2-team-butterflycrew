import MovieGallery from "./MovieGallery";
import {useEffect, useState} from "react";
import {Movie} from "../model/Movie";
import axios from "axios";
import "./MovieApp.css"
import SearchBar from "./SearchBar";

export default function MovieApp(){

    const [movies, setMovies] = useState<Movie[]>([])
    const [searchText, setSearchText] = useState<string>("")

    useEffect(() => {
        getMovies()
    }, [searchText])

    function getMovies(){
        axios.get("/api/movies")
            .then((response) => {
                setMovies(response.data)
            })
            .catch(e => console.error(e))
    }

    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
    function handleSearchText(searchText: string){
        setSearchText(searchText)
    }

    return(
        <div className={"container-fluid movie-app"}>
            <SearchBar handleSearchText={handleSearchText} />
            <MovieGallery movieList={filteredMovies}/>
        </div>
    )
}