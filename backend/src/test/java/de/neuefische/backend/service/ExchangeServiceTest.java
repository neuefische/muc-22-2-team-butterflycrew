package de.neuefische.backend.service;

import de.neuefische.backend.models.MovieExchangeDTO;
import de.neuefische.backend.models.MovieToExchange;
import de.neuefische.backend.repo.ExchangeRepo;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ExchangeServiceTest {

    ExchangeRepo exchangeRepo = mock(ExchangeRepo.class);
    IDService idService = mock(IDService.class);

    ExchangeService exchangeService = new ExchangeService(exchangeRepo, idService);

    @Test
    void getAllEntries() {

        // GIVEN
        List<MovieToExchange> expected = Collections.emptyList();

        // WHEN
        when(exchangeRepo.findAll()).thenReturn(expected);
        List<MovieToExchange> result = exchangeService.getAllEntries();

        // THEN
        assertEquals(expected, result);
        verify(exchangeRepo).findAll();
    }

    @Test
    void addEntry() {

        // GIVEN
        MovieExchangeDTO movieToAdd = new MovieExchangeDTO(

                "Der Herr Der Ringe",
                "offer",
                "ABC",
                "new",
                8.50

        );
        MovieToExchange expectedMovie = new MovieToExchange(
                "1",
                "Der Herr Der Ringe",
                "offer",
                "ABC",
                "new",
                8.50
        );

        // WHEN
        when(exchangeRepo.save(any())).thenReturn(expectedMovie);
        when(idService.generateID()).thenReturn("1");

        MovieToExchange movieActual = exchangeService.addEntry(movieToAdd);

        // THEN
        assertEquals(expectedMovie, movieActual);
        verify(exchangeRepo).save(expectedMovie);
    }

    @Test
    void getEntryByID() {

    }

    @Test
    void deleteEntryByID() {
    }

    @Test
    void updateEntry() {
    }
}