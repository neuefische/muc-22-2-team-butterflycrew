import {MovieToExchange} from "../model/MovieToExchange";
import axios from "axios";
import MovieExchangeForm from "./MovieExchangeForm";
import {useEffect, useState} from "react";
import MovieExchangeGallery from "./MovieExchangeGallery";
import SearchBar from "./SearchBar";

export default function MovieExchangeApp(){

    const [exchangeMovies, setExchangeMovies]=useState<MovieToExchange[]>([])
    const [searchText, setSearchText] = useState<string>("")

    function handleOnChangSearchText(searchText: string){
        setSearchText(searchText)
    }

    const filteredExchangeMovies = exchangeMovies.filter((exchangeMovie) => exchangeMovie.title.toLowerCase().includes(searchText.toLowerCase()) || exchangeMovie.description.toLowerCase().includes(searchText.toLowerCase()) || exchangeMovie.status.toLowerCase().includes(searchText.toLowerCase()))

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

    function editMovie(newMovie: MovieToExchange){
       axios.put("/api/exchange/" + newMovie.id, newMovie)
           .then(getExchangeMovies)

    }

    return(
        <div>
            <MovieExchangeForm addMovie={addExchangeMovie}/>
            <div className={"container"}>
                <SearchBar handleSearchText={handleOnChangSearchText} />
            </div>
            <MovieExchangeGallery editMovie={editMovie} deleteMovie={removeMovie}  movies={filteredExchangeMovies}/>
        </div>
    )
}