package de.neuefische.backend.controller;


import de.neuefische.backend.models.Movie;

import de.neuefische.backend.service.MovieService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
@RequestMapping("/api/movies")

public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public Map<String, Movie> getAllMovies(){
        return movieService.getAllMovies();
    }

    @GetMapping("/{id}")
    public Movie getMovieByID(@PathVariable String id){
        return movieService.getMovieByID(id);
    }

    @PostMapping
    public Movie addMovie(@RequestBody Movie movieToAdd){
        return movieService.addMovie(movieToAdd);
    }

    @PutMapping(path = "/{id}/update")
    public Movie updateMovie (@PathVariable String id, @RequestBody Movie movieToUpdate){
        if(!movieToUpdate.id().equals(id)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The ID in the URL does not match the request body's ID");
        }
        return movieService.updateMovie(movieToUpdate);
    }

    @DeleteMapping("/{id}")
    public void deleteMovie(@PathVariable String id){
        movieService.deleteMovie(id);
    }
}
