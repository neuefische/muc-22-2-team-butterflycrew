package de.neuefische.backend.models;

import java.util.List;

public class UpcomingMovie extends Movie{

    String release_date;

    public UpcomingMovie(String id, String imdb_id, List<Integer> genres, String title, String poster_path, String release_date) {
        super(id, imdb_id, genres, title, poster_path);
        this.release_date=release_date;
    }

    public String getRelease_date() {
        return release_date;
    }
}
