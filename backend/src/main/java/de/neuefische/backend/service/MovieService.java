package de.neuefische.backend.service;


import de.neuefische.backend.models.Movie;
import de.neuefische.backend.repo.MovieRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private MovieRepo movieRepo;
    private IDService idService;

    public MovieService(MovieRepo movieRepo){
        this.movieRepo = movieRepo;
    }

    public List<Movie> getAllMovies(){
        return movieRepo.getMovieList();
    }

    public Movie addMovie(Movie movieToAdd){
        Movie movie = new Movie(
                idService.generateID(),
                movieToAdd.imdb_id(),
                movieToAdd.title(),
                movieToAdd.genres(),
                movieToAdd.release_date(),
                movieToAdd.status(),
                movieToAdd.budget(),
                movieToAdd.overview(),
                movieToAdd.runtime(),
                movieToAdd.vote_average()
                );
        return movieRepo.addMovie(movie);
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
