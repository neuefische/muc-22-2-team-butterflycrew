package de.neuefische.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Genres")
public record Genre(
        @Id
        String id,
        String name
) {
}
