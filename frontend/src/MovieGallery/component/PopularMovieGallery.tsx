import {PopularMovie} from "../model/PopularMovie";
import TopRatedMovieComponent from "./TopRatedMovieComponent";
import PopularMovieComponent from "./PopularMovieComponent";

type PopularMovieGalleryProps = {
    popularMovies: PopularMovie[]
}

export default function PopularMovieGallery(props: PopularMovieGalleryProps){
    const popularMovieComponent = props.popularMovies.slice(0, 5).map((movie) => {
            return(
                <PopularMovieComponent popularMovie={movie} />
            )
        })

    return(
        <div className="card-group">
            {popularMovieComponent}
        </div>
    )
}