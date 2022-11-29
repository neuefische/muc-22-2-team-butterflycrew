import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {UpcomingMovie} from "../model/UpcomingMovie";
import {getImage} from "../api/image-api";

type UpcomingMovieProps = {
    upcomingMovie: UpcomingMovie
}

export default function UpcomingMovie(props: UpcomingMovieProps){
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={getImage(props.upcomingMovie.poster_path)}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.upcomingMovie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.upcomingMovie.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}