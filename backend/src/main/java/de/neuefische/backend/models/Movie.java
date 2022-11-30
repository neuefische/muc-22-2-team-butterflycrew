package de.neuefische.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("movies")
public record Movie(
        @Id
        String id,
        String imdb_id,
        String title,
        List<Genre> genres,
        String release_date,
        String status,
        int budget,
        String overview,
        int runtime,
        double vote_average
) {
}
