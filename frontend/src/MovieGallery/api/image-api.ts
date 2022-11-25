import React from "react";

const baseUrl:string = "https://image.tmdb.org/t/p"
export const getImage = (poster_path: string): string => {
    return baseUrl + poster_path
}
