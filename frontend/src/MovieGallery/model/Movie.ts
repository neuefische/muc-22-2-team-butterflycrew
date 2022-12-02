import {Genre} from "./Genre";

export type Movie = {
    id: string,
    title: string,
    genres: Genre[],
    release_date: string,
    original_title: string,
    overview: string,
    vote_average: number,
    popularity: number,
    poster_path: string
}