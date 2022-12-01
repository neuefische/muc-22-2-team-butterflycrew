package de.neuefische.backend.controller;

import de.neuefische.backend.models.MovieExchangeDTO;
import de.neuefische.backend.models.MovieToExchange;
import de.neuefische.backend.service.ExchangeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exchange")
public class ExchangeController {

    private final ExchangeService exchangeService;

    public ExchangeController(ExchangeService exchangeService) {
        this.exchangeService = exchangeService;
    }

    @GetMapping
    public List<MovieToExchange> getAllEntries(){
        return exchangeService.getAllEntries();
    }

    @PostMapping
    public MovieToExchange addEntry (@RequestBody MovieExchangeDTO entry){
        return exchangeService.addEntry(entry);
    }

    @GetMapping(path = "/{id}")
    public MovieToExchange getEntryByID (@PathVariable String id){
        return exchangeService.getEntryByID(id);
    }

    @PutMapping(path = "/{id}")
    public MovieToExchange updateEntry(@PathVariable String id, @RequestBody MovieExchangeDTO entry){
        return exchangeService.updateEntry(id, entry);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteEntry (@PathVariable String id){
        exchangeService.deleteEntryByID(id);
    }
}
