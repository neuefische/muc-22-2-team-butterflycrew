package de.neuefische.backend.service;


import de.neuefische.backend.models.Movie;
import de.neuefische.backend.repo.MovieRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MovieService {

    private final MovieRepo movieRepo;
    private static final double TOPRATED_VALUE_TO_SHOW = 8.6;
    private static final double POPULARE_VALUE_TO_SHOW = 4000;
    private static final int YEAR_VALUE_TO_SHOW = 2022;
    private static final int MONTH_VALUE_TO_SHOW = 12;


    public MovieService(MovieRepo movieRepo){
        this.movieRepo = movieRepo;
    }

    public List<Movie> getAllMovies(){
        return movieRepo.findAll();
    }
    public List<Movie> getUpcomingMovies(){

        List<Movie> filteredMovies = new ArrayList<>();
        for (Movie allMovie : getAllMovies()) {
            String[] splitter = allMovie.release_date().split("-");
            int year = Integer.parseInt(splitter[0]);
            int month = Integer.parseInt(splitter[1]);
            if (year== YEAR_VALUE_TO_SHOW &&month== MONTH_VALUE_TO_SHOW){
                filteredMovies.add(allMovie);
            }
        }
        return filteredMovies;
    }
    public List<Movie> getTopratedMovies(){
        List<Movie> filteredMovies = new ArrayList<>();
        for (Movie allMovie : getAllMovies()){
            if (allMovie.vote_average() >= TOPRATED_VALUE_TO_SHOW){
                filteredMovies.add(allMovie);
            }
        }
        return filteredMovies;
    }
    public List<Movie> getPopulareMovies(){
        List<Movie> filteredMovies = new ArrayList<>();
        for (Movie allMovie : getAllMovies()){
            if (allMovie.popularity()>= POPULARE_VALUE_TO_SHOW){
                filteredMovies.add(allMovie);
            }
        }
        return filteredMovies;
    }
}
