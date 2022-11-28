package de.neuefische.backend.repo;

import de.neuefische.backend.models.Movie;
import de.neuefische.backend.service.IDService;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;


@Repository
public class MovieRepo {

private final Map<String, Movie> movieMap = new HashMap<>();
private final IDService idService = new IDService();

    public Map<String, Movie> getMovieMap() {
        return movieMap;
    }

    public Movie getMovieByID(String id){
        return movieMap.get(id);
    }

    public void deleteMovieByID(String id){
        movieMap.remove(id);
    }

    public Movie addMovie(Movie movieToAdd){
        Movie add = new Movie(
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
        movieMap.put(add.id(), add);
        return movieMap.get(add.id());
    }
    public Movie updateMovie(Movie movieToUpdate){
        return movieMap.replace(movieToUpdate.id(), movieToUpdate);
    }

}
