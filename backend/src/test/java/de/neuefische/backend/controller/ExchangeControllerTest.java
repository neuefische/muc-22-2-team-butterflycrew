package de.neuefische.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.models.Movie;
import de.neuefische.backend.models.MovieToExchange;
import de.neuefische.backend.repo.ExchangeRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ExchangeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ExchangeRepo exchangeRepo;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @DirtiesContext
    void getAllEntries_whenEntryListEmpty_thanReturnList() throws Exception {
        mockMvc.perform(get("/api/exchange"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    @DirtiesContext
    void addEntry() throws Exception {

        MvcResult result = mockMvc.perform(post("/api/exchange")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                        {
                                        "title": "Der Herr Der Ringe",
                                        "status": "offer",
                                        "description": "ABC",
                                        "condition": "new",
                                        "price": 8.50
                                        }
                                        """
                        ))
                .andExpect(status().isOk())
                .andReturn();

        String content = result.getResponse().getContentAsString();
        MovieToExchange movieToExchange = objectMapper.readValue(content, MovieToExchange.class);
        assertNotNull(movieToExchange.id());
    }

    @Test
    @DirtiesContext
    void getEntryByID() throws Exception {

        MovieToExchange movieToExchange = new MovieToExchange(
                "8",
                "Der Herr Der Ringe",
                "offer",
                "ABC",
                "new",
                8.50
        );
        MovieToExchange result = exchangeRepo.save(movieToExchange);
        mockMvc.perform(get("/api/exchange/" + result.id()))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        {
                           "id": "<ID>",
                           "title": "Der Herr Der Ringe",
                           "status": "offer",
                           "description": "ABC",
                           "condition": "new",
                            "price": 8.50
                        }
                        """.replace("<ID>", result.id())));
    }

    @Test
    @DirtiesContext
    void updateEntry() throws Exception {
        MovieToExchange movieToExchange = new MovieToExchange(
                "8",
                "Der Herr Der Ringe",
                "offer",
                "ABC",
                "new",
                8.50
        );
        exchangeRepo.save(movieToExchange);

        mockMvc.perform(put("/api/exchange/" + movieToExchange.id())
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                                """
                                {
                               "id": "8",
                               "title": "Blow",
                               "status": "offer",
                               "description": "ABC",
                               "condition": "new",
                               "price": 8.50
                                }
                                        """
                        ))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                {
                               "id": "8",
                               "title": "Blow",
                               "status": "offer",
                               "description": "ABC",
                               "condition": "new",
                               "price": 8.50
                                }
                                """
                ));
    }

    @Test
    @DirtiesContext
    void deleteEntry() throws Exception {

    }
}