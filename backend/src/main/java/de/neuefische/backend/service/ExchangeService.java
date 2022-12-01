package de.neuefische.backend.service;

import de.neuefische.backend.models.MovieExchangeDTO;
import de.neuefische.backend.models.MovieToExchange;
import de.neuefische.backend.repo.ExchangeRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExchangeService {

    private final ExchangeRepo exchangeRepo;
    private final IDService idService;

    public ExchangeService(ExchangeRepo exchangeRepo, IDService idService) {
        this.exchangeRepo = exchangeRepo;
        this.idService = idService;
    }

    public List<MovieToExchange> getAllEntries() {
        return exchangeRepo.findAll();
    }

    public MovieToExchange addEntry(MovieExchangeDTO entryToAdd){

        MovieToExchange newMovieToExchange = new MovieToExchange(
                idService.generateID(),
                entryToAdd.title(),
                entryToAdd.status(),
                entryToAdd.description(),
                entryToAdd.condition(),
                entryToAdd.price()
        );
        return exchangeRepo.save(newMovieToExchange);
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

    public MovieToExchange updateEntry(String id, MovieExchangeDTO entryUpdate){
        MovieToExchange toEdit = new MovieToExchange(
                id,
                entryUpdate.title(),
                entryUpdate.status(),
                entryUpdate.description(),
                entryUpdate.condition(),
                entryUpdate.price());

        return exchangeRepo.save(toEdit);
    }


}
