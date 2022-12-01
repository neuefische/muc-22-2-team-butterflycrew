package de.neuefische.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Objects;

@Document("movies")
public class Movie{
        @Id
        String id;
        String imdb_id;
        List<Integer> genres;
        String title;
        String poster_pat;

        public Movie(String id, String imdb_id, List<Integer> genres, String title, String poster_pat) {
                this.id = id;
                this.imdb_id = imdb_id;
                this.genres = genres;
                this.title = title;
                this.poster_pat = poster_pat;
        }

        public String getId() {
                return id;
        }

        public String getImdb_id() {
                return imdb_id;
        }

        public List<Integer> getGenres() {
                return genres;
        }

        public String getTitle() {
                return title;
        }

        public String getPoster_pat() {
                return poster_pat;
        }

        @Override
        public boolean equals(Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                Movie movie = (Movie) o;

                if (!Objects.equals(id, movie.id)) return false;
                if (!Objects.equals(imdb_id, movie.imdb_id)) return false;
                if (!Objects.equals(genres, movie.genres)) return false;
                if (!Objects.equals(title, movie.title)) return false;
                return Objects.equals(poster_pat, movie.poster_pat);
        }

        @Override
        public int hashCode() {
                int result = id != null ? id.hashCode() : 0;
                result = 31 * result + (imdb_id != null ? imdb_id.hashCode() : 0);
                result = 31 * result + (genres != null ? genres.hashCode() : 0);
                result = 31 * result + (title != null ? title.hashCode() : 0);
                result = 31 * result + (poster_pat != null ? poster_pat.hashCode() : 0);
                return result;
        }
}
