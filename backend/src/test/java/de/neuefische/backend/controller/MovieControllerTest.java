package de.neuefische.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.models.Movie;
import de.neuefische.backend.repo.MovieRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Collections;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
class MovieControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private MovieRepo movieRepo;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @DirtiesContext
    void getAllMovies_whenMovieListEmpty_thenReturnList() throws Exception {
        mockMvc.perform(get("/api/movies"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    @DirtiesContext
    void getMovieByID() throws Exception {
        Movie e = new Movie(
                "1",
                "1234",
                "Fight Club",
                Collections.emptyList(),
                "01.01.2000",
                "released",
                100000,
                "BlaBlaBla",
                129,
                6.8);
        movieRepo.getMovieList().put(e.id(), e);

        mockMvc.perform(get("/api/movies/" + e.id()))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                                        {
                                                            "id": "1",
                                                            "imdb_id": "1234",
                                                            "title": "Fight Club",
                                                            "genres": [],
                                                            "release_date": "01.01.2000",
                                                            "status": "released",
                                                            "budget": 100000,
                                                            "overview": "BlaBlaBla",
                                                            "runtime": 129,
                                                            "vote_average": 6.8
                                                        }
                                """
                ));

    }

    @Test
    @DirtiesContext
    void addMovie() throws Exception {


        MvcResult result = mockMvc.perform(post("/api/movies/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                    {
                                    
                                    "imdb_id": "1234",
                                    "title": "Fight Club",
                                    "genres": [],
                                    "release_date": "01.01.2000",
                                    "status": "released",
                                    "budget": 100000,
                                    "overview": "BlaBlaBla",
                                    "runtime": 129,
                                    "vote_average": 6.8
                                    }
                                            """
                        ))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                {
                                    
                                    "imdb_id": "1234",
                                    "title": "Fight Club",
                                    "genres": [],
                                    "release_date": "01.01.2000",
                                    "status": "released",
                                    "budget": 100000,
                                    "overview": "BlaBlaBla",
                                    "runtime": 129,
                                    "vote_average": 6.8
                                }
                                """
                ))
                .andReturn();

        String content = result.getResponse().getContentAsString();
        Movie movie = objectMapper.readValue(content, Movie.class);
        assertNotNull(movie.id());
    }

    @Test
    @DirtiesContext
    void updateMovie() throws Exception {
        Movie e = new Movie(
                "1",
                "1234",
                "Fight Club",
                Collections.emptyList(),
                "01.01.2000",
                "released",
                100000,
                "BlaBlaBla",
                129,
                6.8);
        movieRepo.getMovieList().put(e.id(), e);

        mockMvc.perform(put("/api/movies/" + e.id() + "/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                    {
                                    "id": "1",
                                    "imdb_id": "1234",
                                    "title": "HelloKittyClub",
                                    "genres": [],
                                    "release_date": "01.01.2000",
                                    "status": "released",
                                    "budget": 100000,
                                    "overview": "BlaBlaBla",
                                    "runtime": 129,
                                    "vote_average": 6.8
                                    }
                                            """
                        ))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                {
                                    "id": "1",
                                    "imdb_id": "1234",
                                    "title": "HelloKittyClub",
                                    "genres": [],
                                    "release_date": "01.01.2000",
                                    "status": "released",
                                    "budget": 100000,
                                    "overview": "BlaBlaBla",
                                    "runtime": 129,
                                    "vote_average": 6.8
                                }
                                """
                ));



    }

    @Test
    @DirtiesContext
    void deleteMovie() throws Exception {
        Movie e = new Movie(
                "1",
                "1234",
                "Fight Club",
                Collections.emptyList(),
                "01.01.2000",
                "released",
                100000,
                "BlaBlaBla",
                129,
                6.8);
        movieRepo.getMovieList().put(e.id(), e);

        mockMvc.perform(delete("/api/movies/" + e.id()))
                .andExpect(status().isOk());

    }
}