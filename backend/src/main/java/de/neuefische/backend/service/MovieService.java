package de.neuefische.backend.service;


import de.neuefische.backend.models.Movie;
import de.neuefische.backend.repo.MovieRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    private final MovieRepo movieRepo;

    public MovieService(MovieRepo movieRepo){
        this.movieRepo = movieRepo;
    }

    public List<Movie> getAllMovies(){
        return movieRepo.findAll();
    }

    public Movie addMovie(Movie movieToAdd){
        return movieRepo.save(movieToAdd);
    }

    public Movie getMovieByID(String id){
        Optional<Movie> optionalMovie = movieRepo.findById(id);
        if (optionalMovie.isPresent()){
            return optionalMovie.get();
        }
        throw new IllegalArgumentException("Id not found!");
    }

    public void deleteMovieById(String id){
        movieRepo.deleteById(id);
    }

    public Movie updateMovie(Movie movieToUpdate){
        return movieRepo.save(movieToUpdate);
    }




}
