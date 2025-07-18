import axios from "axios";
import {AUTHORIZATION_TOKEN} from "../constants/env.ts";
import {MovieShortened} from "../types/MovieShortened.ts";
import {MovieFull} from "../types/MovieFull.ts";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + AUTHORIZATION_TOKEN
    }
})

export const getMovieList = async (page: number) => {
    const {data} = await axiosInstance.get<{
        results: MovieShortened[]
    }>('/3/discover/movie?include_adult=false&&page=' + (page ?? 1));
    const {results} = data;
    return results;
}

export const getMovieListBySearch = async (searchQuery: string, page?: number) => {
    const {data} = await axiosInstance.get<{
        results: MovieShortened[]
    }>('/3/search/movie?include_adult=false&query=' + (searchQuery || '') + '&page=1' + (page ?? 1));
    const {results} = data;
    return results;
}

export const getOneMovie = async (id: string | undefined) => {
    if (id) {
        try {
            const {data} = await axiosInstance.get<{
                results: MovieFull;
            }>('/3/movie/' + id);
            return data;
        } catch (e) {
            return e;
        }
    }
}