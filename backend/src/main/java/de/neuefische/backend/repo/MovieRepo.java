package de.neuefische.backend.repo;

import de.neuefische.backend.models.Movie;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;


@Repository
public class MovieRepo {

List<Movie> movieList;

    public MovieRepo(List<Movie> movieList) {
        this.movieList = movieList;
    }

    public List<Movie> getMovieList() {
        return movieList;
    }

    public Movie getMovieByID(int id){
        return movieList.get(id);
    }

    public void deleteMovieByID(int id){
        movieList.remove(id);
    }

    public Movie addMovie(Movie movieToAdd){
        movieList.add(movieToAdd);
        return movieToAdd;
    }
    public Movie updateMovie(Movie movieToUpdate){
        for (Movie movie : movieList) {
            if(movie.id() == movieToUpdate.id()){
                Movie copy = new Movie(
                        movie.id(),
                        movie.imdb_id(),
                        movieToUpdate.title(),
                        movieToUpdate.genres(),
                        movieToUpdate.release_date(),
                        movieToUpdate.status(),
                        movieToUpdate.budget(),
                        movieToUpdate.overview(),
                        movieToUpdate.runtime(),
                        movieToUpdate.vote_average()
                );
                  movieList.add(copy);
                  movieList.remove(movie);
                  return copy;
            }
        }
        return movieToUpdate;
    }

}
