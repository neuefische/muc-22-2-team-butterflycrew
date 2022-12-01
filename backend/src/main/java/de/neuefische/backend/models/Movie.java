package de.neuefische.backend.models;

public record Movie(

        String id,
        String imdbID,
        String genres,
        String title,
        String poster,
        String released,
        String runtime,
        String plot,
        String metascore,
        String boxoffice
){}

