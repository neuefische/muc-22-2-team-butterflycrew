package de.neuefische.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("Movie")

public record Movie(
        @Id
        String id,
        String imdb_id,
        List<Integer> genres,
        String title,
        String poster_path,
        String release_date,
        double vote_average,
        double popularity
) {
}
