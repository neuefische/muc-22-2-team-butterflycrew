package de.neuefische.backend.models;


import java.util.List;

public class PopularMovie extends Movie{

    double popularity;


    public PopularMovie(String id, String imdb_id, List<Integer> genres, String title, String poster_pat) {
        super(id, imdb_id, genres, title, poster_pat);
    }

    public double getPopularity() {
        return popularity;
    }
}
