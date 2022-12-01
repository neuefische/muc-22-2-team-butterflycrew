package de.neuefische.backend.repo;


import de.neuefische.backend.models.MovieToExchange;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExchangeRepo extends MongoRepository<MovieToExchange, String> {
}
