import {TopRatedMovie} from "../model/TopRatedMovie";
import TopRatedMovieComponent from "./TopRatedMovieComponent";

type TopRatedMovieGalleryProps = {
    topRatedMovies: TopRatedMovie[]
}

export default function TopRatedMovieGallery(props: TopRatedMovieGalleryProps){

    const topRatedMovieComponent = props.topRatedMovies.filter((movie) => movie.vote_average >= 8)
    .slice(0, 5).map((movie) => {
            return(
                <TopRatedMovieComponent topRatedMovie={movie} key={movie.id} />
            )
        })

    return(
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-4">
            {topRatedMovieComponent}
        </div>
    )
}