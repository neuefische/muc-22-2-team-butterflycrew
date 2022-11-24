package de.neuefische.backend.service;

import de.neuefische.backend.models.Movie;
import de.neuefische.backend.repo.MovieRepo;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class MovieServiceTest {

    MovieRepo movieRepo = mock(MovieRepo.class);
    IDService idService = mock(IDService.class);

    MovieService movieService = new MovieService(movieRepo, idService);

    @Test
    void when_MovieRepo_is_not_empty_then_return_empty_list_of_movies() {
        // GIVEN
        List<Movie> expected = new ArrayList<>();
        // WHEN
        when(movieRepo.getMovieList()).thenReturn(expected);
        List<Movie> actual = movieService.getAllMovies();
        // THEN
        assertEquals(expected, actual);
        verify(movieRepo).getMovieList();
    }

    @Test
    void when_movie_not_exist_add_movie_and_generate_uuid() {
        // GIVEN
        String expectedId = "1";
        Movie expected = new Movie(
                "1",
                "1",
                "title",
                Collections.emptyList(),
                "date",
                "status",
                0,
                "overview",
                0,
                0.0
        );

        // WHEN
        when(movieRepo.addMovie(any())).thenReturn(expected);
        when(idService.generateID()).thenReturn(expectedId);

        Movie actual = movieService.addMovie(expected);
        String actualId = idService.generateID();

        // THEN
        assertEquals(expected, actual);
        assertEquals(expectedId, actualId);
        verify(movieRepo).addMovie(expected);
    }

    @Test
    void when_id_exist_then_return_movie_by_id() {
        // GIVEN
        String id = "1";
        Movie expected = new Movie(
                "1",
                "1",
                "title",
                Collections.emptyList(),
                "date",
                "status",
                0,
                "overview",
                0,
                0.0
        );

        // WHEN
        when(movieRepo.getMovieByID(id)).thenReturn(expected);
        Movie actual = movieService.getMovieByID(id);

        // THEN
        assertEquals(expected, actual);
        verify(movieRepo).getMovieByID(id);
    }

    /*@Test TEST HIER MÖGLICH, DA KEIN RÜCKGABEWERT?!
    void deleteMovie() {
        // GIVEN
        String id = "1";
        Movie expected = new Movie(
                "1",
                "1",
                "title",
                Collections.emptyList(),
                "date",
                "status",
                0,
                "overview",
                0,
                0.0
        );

        // WHEN
        when(movieRepo.deleteMovieByID(id)).thenCallRealMethod()
    }*/

    @Test
    void updateMovie() {
        // GIVEN
        Movie expected = new Movie(
                "1",
                "1",
                "title",
                Collections.emptyList(),
                "date",
                "status",
                0,
                "overview",
                0,
                0.0
        );

        //WHEN
        when(movieRepo.updateMovie(expected)).thenReturn(expected);
        Movie actual = movieService.updateMovie(expected);

        //THEN
        assertEquals(expected, actual);
        verify(movieRepo).updateMovie(expected);
    }
}