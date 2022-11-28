package de.neuefische.backend.service;


import de.neuefische.backend.models.Movie;
import de.neuefische.backend.repo.MovieRepo;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class MovieService {

    private final MovieRepo movieRepo = new MovieRepo();

    public Map<String, Movie> getAllMovies(){
        return movieRepo.getMovieList();
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
