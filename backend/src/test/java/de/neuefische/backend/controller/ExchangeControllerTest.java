package de.neuefische.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.models.MovieToExchange;
import de.neuefische.backend.repo.ExchangeRepo;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class ExchangeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ExchangeRepo exchangeRepo;

    @Autowired
    private ObjectMapper objectMapper;

    @org.junit.jupiter.api.BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders
                .webAppContextSetup(context)
                .apply(springSecurity())
                .build();
    }

    @WithMockUser("spring")
    @Test
    @DirtiesContext
    void getAllEntries_whenEntryListEmpty_thanReturnList() throws Exception {
        mockMvc.perform(get("/api/exchange"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @WithMockUser("spring")
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

    @WithMockUser("spring")
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

    @WithMockUser("spring")
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

    @WithMockUser("spring")
    @Test
    @DirtiesContext
    void deleteEntry() throws Exception {
        MovieToExchange movieToExchange = new MovieToExchange(
                "8",
                "Der Herr Der Ringe",
                "offer",
                "ABC",
                "new",
                8.50

        );
        exchangeRepo.save(movieToExchange);

        mockMvc.perform(delete("/api/exchange/" + movieToExchange.id()))
                .andExpect(status().isOk());
    }
}