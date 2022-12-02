package de.neuefische.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.repo.ExchangeRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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
    void getAllEntries_whenEntryListEmpty_thanReturnList() throws Exception {
        mockMvc.perform(get("/api/exchange"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    void addEntry() {
    }

    @Test
    void getEntryByID() {
    }

    @Test
    void updateEntry() {
    }

    @Test
    void deleteEntry() {
    }
}