import {UpcomingMovie} from "../model/UpcomingMovie";
import UpcomingMovieComponent from "./UpcomingMovieComponent";
import Grid from '@mui/material/Grid';
import {Box} from "@mui/material";

type UpcomingMovieGalleryProps = {
    upcomingMovies: UpcomingMovie[]
}

export default function UpcomingMovieGallery(props: UpcomingMovieGalleryProps){
    const upcomingMovieComponent = props.upcomingMovies.slice(0, 5).map((movie) => {
        return (
            <UpcomingMovieComponent upcomingMovie={movie} key={movie.id} />
        )
    })

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    {upcomingMovieComponent}
                </Grid>
            </Grid>
        </Box>
    )
}