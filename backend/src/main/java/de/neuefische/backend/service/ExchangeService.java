package de.neuefische.backend.service;

import de.neuefische.backend.models.MovieToExchange;
import de.neuefische.backend.repo.ExchangeRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExchangeService {

    private final ExchangeRepo exchangeRepo;

    public ExchangeService(ExchangeRepo exchangeRepo) {
        this.exchangeRepo = exchangeRepo;
    }

    public List<MovieToExchange> getAllEntries() {
        return exchangeRepo.findAll();
    }

    public MovieToExchange addEntry(MovieToExchange entryToAdd){
        return exchangeRepo.save(entryToAdd);
    }

    public MovieToExchange getEntryByID (String id){
        Optional<MovieToExchange> optionalEntry = exchangeRepo.findById(id);
        if(optionalEntry.isPresent()){
            return optionalEntry.get();
        }
        throw new IllegalArgumentException("ID not found...");
    }

    public void deleteEntryByID(String id){
        exchangeRepo.deleteById(id);
    }

    public MovieToExchange updateEntry (MovieToExchange entryToUpdate){
        return exchangeRepo.save(entryToUpdate);
    }
}
