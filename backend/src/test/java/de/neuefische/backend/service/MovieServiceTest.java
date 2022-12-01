package de.neuefische.backend.service;

import de.neuefische.backend.models.Movie;
import de.neuefische.backend.repo.MovieRepo;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class MovieServiceTest {

    MovieRepo movieRepo = mock(MovieRepo.class);
    IDService idService = mock(IDService.class);

    MovieService movieService = new MovieService(movieRepo);


    @Test
    void getAllMovies() {
        //Given
        List<Movie> expected = Collections.emptyList();

        //When
        when(movieRepo.findAll()).thenReturn(expected);
        List<Movie> result = movieService.getAllMovies();

        //Then
        assertEquals(expected, result);
        verify(movieRepo).findAll();

    }

    @Test
    void addMovie() {
        //Given
        Movie expectedMovie = new Movie(
                "1",
                "1234",
                "Fight Club",
                Collections.emptyList(),
                "01.01.2000",
                "released",
                100000,
                "BlaBlaBla",
                129,
                6.8 );
        String expectedID = "1";

        //When
        when(movieRepo.save(any())).thenReturn(expectedMovie);
        when(idService.generateID()).thenReturn(expectedID);

        Movie movieActual = movieService.addMovie(expectedMovie);

        //Then
        assertEquals(expectedMovie,movieActual);
    }

    @Test
    void getMovieByID() {
        //Given
        Movie expectedMovie = new Movie(
                "1",
                "1234",
                "Fight Club",
                Collections.emptyList(),
                "01.01.2000",
                "released",
                100000,
                "BlaBlaBla",
                129,
                6.8 );

                String id = "1";
        //When
        when(movieRepo.findById(id)).thenReturn(Optional.of(expectedMovie));
        Movie actualMovie = movieService.getMovieByID(id);

        //Then
        assertEquals(expectedMovie, actualMovie);
        verify(movieRepo).findById(id);
    }


    @Test
    void updateMovie() {
        //Given
        Movie expectedMovie = new Movie(
                "1",
                "1234",
                "Fight Club",
                Collections.emptyList(),
                "01.01.2000",
                "released",
                100000,
                "BlaBlaBla",
                129,
                6.8 );



        //When
        when(movieRepo.save(expectedMovie)).thenReturn(expectedMovie);
        Movie actualMovie = movieService.updateMovie(expectedMovie);

        //Then
        assertEquals(expectedMovie, actualMovie);
        verify(movieRepo).save(expectedMovie);

    }


    @Test
    void deleteMovie(){
        // Given
        Movie expectedMovie = new Movie(
                "1",
                "1234",
                "Fight Club",
                Collections.emptyList(),
                "01.01.2000",
                "released",
                100000,
                "BlaBlaBla",
                129,
                6.8 );

        doNothing().when(movieRepo).deleteById(isA(String.class));
        movieRepo.deleteById(expectedMovie.id());
        verify(movieRepo, times(1)).deleteById(expectedMovie.id());

    }
}
