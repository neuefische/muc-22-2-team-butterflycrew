import {Movie} from "../model/Movie";
import MovieCard from "./MovieCard";

type MovieGalleryProps = {
    movieList : Movie[]
}

export default function MovieGallery(props: MovieGalleryProps){

    const movieComponents = props.movieList.map((movie)=>{
        return <MovieCard movie={movie} key={movie.id}/>
    })

    return(

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-6 g-4">
            {movieComponents}
        </div>

    )
}