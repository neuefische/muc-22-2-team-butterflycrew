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
        List<Movie> expected = Collections.emptyList();

        //When
        when(movieRepo.findAll()).thenReturn(expected);
        List<Movie> result = movieService.getUpcomingMovies();

        //Then
        assertEquals(expected, result);
        verify(movieRepo).findAll();
    }
    @Test
    void getTopratedMovies(){
        //Given
        List<Movie> expected = Collections.emptyList();

        //When
        when(movieRepo.findAll()).thenReturn(expected);
        List<Movie> result = movieService.getTopratedMovies();

        //Then
        assertEquals(expected, result);
        verify(movieRepo).findAll();
    }
    @Test
    void getPopulareMovies(){
        //Given
        List<Movie> expected = Collections.emptyList();

        //When
        when(movieRepo.findAll()).thenReturn(expected);
        List<Movie> result = movieService.getPopulareMovies();

        //Then
        assertEquals(expected, result);
        verify(movieRepo).findAll();
    }
}
