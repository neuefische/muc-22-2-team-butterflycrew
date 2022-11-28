package de.neuefische.backend.service;


import de.neuefische.backend.models.Movie;
import de.neuefische.backend.repo.MovieRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepo movieRepo;

    public MovieService(MovieRepo movieRepo){
        this.movieRepo = movieRepo;
    }

    public List<Movie> getAllMovies(){
        return movieRepo.getAllMovies();
    }

    public Movie addMovie(Movie movieToAdd){
        return movieRepo.addMovie(movieToAdd);
    }

    public Movie getMovieByID(String id){
        return movieRepo.getMovieByID(id);
    }

    public void deleteMovie(String id){
        movieRepo.deleteMovieByID(id);
    }

    public Movie updateMovie(Movie movieToUpdate){
        return movieRepo.updateMovie(movieToUpdate);
    }




}
