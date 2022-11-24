package de.neuefische.backend.models;

import java.util.List;

public record Movie(
        int id,
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
