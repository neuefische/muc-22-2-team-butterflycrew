package de.neuefische.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("movie-exchange")
public record MovieToExchange(
        @Id
        String id,
        String status, //search or offer
        String title,
        String description,
        String condition,
        double price

) {
}
