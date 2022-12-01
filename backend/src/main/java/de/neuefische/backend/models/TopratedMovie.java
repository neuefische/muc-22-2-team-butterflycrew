package de.neuefische.backend.models;

import java.util.List;

public class TopratedMovie extends Movie{
    double vote_average;

    public TopratedMovie(String id, String imdb_id, List<Integer> genres, String title, String poster_path, double vote_average) {
        super(id, imdb_id, genres, title, poster_path);
        this.vote_average=vote_average;
    }

    public double getVote_average() {
        return vote_average;
    }

}
