package de.neuefische.backend.controller;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class MovieControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private WebApplicationContext context;

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
    void getUpcomingMovies() throws Exception {
        mockMvc.perform(get("/api/movies/upcoming-movies"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }
    @WithMockUser("spring")
    @Test
    @DirtiesContext
    void getTopratedMovies() throws Exception {
        mockMvc.perform(get("/api/movies/toprated-movies"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }
    @WithMockUser("spring")
    @Test
    @DirtiesContext
    void getPopulareMovies() throws Exception {
        mockMvc.perform(get("/api/movies/populare-movies"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }
}
