import {Genre} from "./Genre";

export type Movie = {
    id: string,
    imdb_id: string,
    title: string,
    genres: Genre[],
    release_date: string
    status: string
    budget: number,
    overview: string,
    runtime: number,
    vote_average: number,
    poster_path: string
}