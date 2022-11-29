import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {NextMovie} from "../model/NextMovie";
import {getImage} from "../api/image-api";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

type NextMovieProps = {
    nextMovies: NextMovie[]
}

export default function NextMovies(props: NextMovieProps) {

    const movieComponent = props.nextMovies.map((nextMovie) => {
        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }));

        return(
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt={nextMovie.title}
                                height="140"
                                image={getImage(nextMovie.poster_path)}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {nextMovie.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {nextMovie.overview}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                </Grid>
            </Grid>
        )
    })

    return (
        <div>{movieComponent}</div>
    )
}