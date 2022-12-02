package de.neuefische.backend.service;

import de.neuefische.backend.models.Movie;
import de.neuefische.backend.repo.MovieRepo;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class MovieServiceTest {

    MovieRepo movieRepo = mock(MovieRepo.class);

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
    void getUpcomingMovies(){
        //Given
        Movie movie1 = new Movie(
                "1",
                Collections.emptyList(),
                "Titel",
                "origTitle",
                "/banane",
                "",
                "2022-12-10",
                8.9,
                7.0
        );
        Movie movie2 = new Movie(
                "1",
                Collections.emptyList(),
                "Titel2",
                "origTitle",
                "/banane2",
                "",
                "2022-12-10",
                8.6,
                7.0
        );
        List<Movie> expected = List.of(movie1, movie2);

        //When
        when(movieRepo.findAll()).thenReturn(expected);
        List<Movie> result = movieService.getUpcomingMovies();

        //Then
        assertEquals(expected, result);
        verify(movieRepo).findAll();
    }

    @Test
    void getUpcomingMovies_not_ok(){
        //Given
        Movie movie1 = new Movie(
                "1",
                Collections.emptyList(),
                "Titel",
                "origTitle",
                "/banane",
                "",
                "2021-12-09",
                8.9,
                7.0
        );
        Movie movie2 = new Movie(
                "1",
                Collections.emptyList(),
                "Titel2",
                "/banane2",
                "2021-12-10",
                "",
                "2022-10-10",
                8.0,
                7.2
        );
        List<Movie> expected = List.of(movie1, movie2);

        //When
        when(movieRepo.findAll()).thenReturn(expected);
        List<Movie> result = movieService.getUpcomingMovies();

        //Then
        assertNotEquals(expected, result);
        verify(movieRepo).findAll();
    }

    @Test
    void getTopratedMovies(){
        //Given
        Movie movie1 = new Movie(
                "1",
                Collections.emptyList(),
                "Titel",
                "origTitle",
                "/banane",
                "",
                "2021-12-09",
                8.9,
                7.0
        );
        Movie movie2 = new Movie(
                "1",
                Collections.emptyList(),
                "Titel",
                "origTitle",
                "/banane",
                "",
                "2021-12-09",
                8.9,
                7.0
        );
        List<Movie> expected = List.of(movie1, movie2);

        //When
        when(movieRepo.findAll()).thenReturn(expected);
        List<Movie> result = movieService.getTopratedMovies();

        //Then
        assertEquals(expected, result);
        verify(movieRepo).findAll();
    }
    @Test
    void getTopratedMovies_not_ok(){
        //Given
        Movie movie1 = new Movie(
                "1",
                Collections.emptyList(),
                "Titel",
                "origTitle",
                "/banane",
                "",
                "2021-12-09",
                8.9,
                7.0
        );
        Movie movie2 = new Movie(
                "1",
                Collections.emptyList(),
                "Titel",
                "origTitle",
                "/banane",
                "",
                "2021-12-09",
                6.0,
                7.0
        );
        List<Movie> expected = List.of(movie1, movie2);

        //When
        when(movieRepo.findAll()).thenReturn(expected);
        List<Movie> result = movieService.getTopratedMovies();

        //Then
        assertNotEquals(expected, result);
        verify(movieRepo).findAll();
    }
    @Test
    void getPopulareMovies(){
        //Given
        Movie movie1 = new Movie(
                "1",
                Collections.emptyList(),
                "Titel",
                "origTitle",
                "/banane",
                "",
                "2021-12-09",
                8.9,
                5000
        );
        Movie movie2 = new Movie(
                "1",
                Collections.emptyList(),
                "Titel",
                "origTitle",
                "/banane",
                "",
                "2021-12-09",
                8.9,
                5000
        );
        List<Movie> expected = List.of(movie1, movie2);

        //When
        when(movieRepo.findAll()).thenReturn(expected);
        List<Movie> result = movieService.getPopulareMovies();

        //Then
        assertEquals(expected, result);
        verify(movieRepo).findAll();
    }
    @Test
    void getPopulareMovies_not_ok(){
        //Given
        Movie movie1 = new Movie(
                "1",
                Collections.emptyList(),
                "Titel",
                "origTitle",
                "/banane",
                "",
                "2021-12-09",
                8.9,
                7.0
        );
        Movie movie2 = new Movie(
                "1",
                Collections.emptyList(),
                "Titel",
                "origTitle",
                "/banane",
                "",
                "2021-12-09",
                8.9,
                7.0
        );
        List<Movie> expected = List.of(movie1, movie2);

        //When
        when(movieRepo.findAll()).thenReturn(expected);
        List<Movie> result = movieService.getPopulareMovies();

        //Then
        assertNotEquals(expected, result);
        verify(movieRepo).findAll();
    }
}
