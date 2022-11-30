import {TopRatedMovie} from "../model/TopRatedMovie";
import TopRatedMovieComponent from "./TopRatedMovieComponent";

type TopRatedMovieGalleryProps = {
    topRatedMovies: TopRatedMovie[]
}

export default function TopRatedMovieGallery(props: TopRatedMovieGalleryProps){

    const topRatedMovieComponent = props.topRatedMovies.filter((movie) => movie.vote_average >= 8)
    .slice(0, 5).map((movie) => {
            return(
                <TopRatedMovieComponent topRatedMovie={movie} />
            )
        })

    return(
        <div className="card-group">
            {topRatedMovieComponent}
        </div>
    )
}