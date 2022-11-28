package de.neuefische.backend.repo;

import de.neuefische.backend.models.Movie;
import de.neuefische.backend.service.IDService;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;


@Repository
public class MovieRepo {

private final Map<String, Movie> movieList = new HashMap<>();
private final IDService idService = new IDService();

    public Map<String, Movie> getMovieList() {
        return movieList;
    }

    public Movie getMovieByID(String id){
        return movieList.get(id);
    }

    public void deleteMovieByID(String id){
        movieList.remove(id);
    }

    public Movie addMovie(Movie movieToAdd){
        return movieList.put(idService.generateID(), movieToAdd);
    }
    public Movie updateMovie(Movie movieToUpdate){
        return movieList.replace(movieToUpdate.id(), movieToUpdate);
    }

}
