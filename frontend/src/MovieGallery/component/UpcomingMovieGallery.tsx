import {UpcomingMovie} from "../model/UpcomingMovie";
import UpcomingMovieComponent from "./UpcomingMovieComponent";
import Grid from '@mui/material/Grid';

type UpcomingMovieGalleryProps = {
    upcomingMovies: UpcomingMovie[]
}

export default function UpcomingMovieGallery(props: UpcomingMovieGalleryProps){
    const upcomingMovieComponent = props.upcomingMovies.map((movie) => {
        return (
            <UpcomingMovieComponent upcomingMovie={movie} key={movie.id} />
        )
    })

    return(
        <Grid container spacing={2}>
            <Grid item xs={8}>
                {upcomingMovieComponent}
            </Grid>
        </Grid>
    )
}