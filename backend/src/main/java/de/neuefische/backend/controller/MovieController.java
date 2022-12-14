package de.neuefische.backend.controller;


import de.neuefische.backend.models.Movie;
import de.neuefische.backend.service.MovieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/movies")

public class MovieController {

   private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<Movie> getAllMovies(){
        return movieService.getAllMovies();
    }
    @GetMapping("/upcoming-movies")
    public List<Movie> getUpcomingMovies(){
       return movieService.getUpcomingMovies();
    }
    @GetMapping("/toprated-movies")
    public List<Movie> getTopratedMovies(){
        return movieService.getTopratedMovies();
    }
    @GetMapping("/populare-movies")
    public List<Movie> getPopulareMovies(){
        return movieService.getPopulareMovies();
    }
    @GetMapping("/details/{id}")
    public Optional<Movie> getMovieById(@PathVariable String id){
        return movieService.getMovieById(id);
    }
}
