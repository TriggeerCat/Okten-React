import axios from "axios";
import {AUTHORIZATION_TOKEN} from "../constants/env.ts";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + AUTHORIZATION_TOKEN
    }
})

export const getMovieList = async (page: string | null) => {
    const {data} = await axiosInstance.get('/3/discover/movie?include_adult=false&&page=' + (page ?? 1));
    const {results} = data;
    return results;
}

export const getOneMovie = async (id: string | undefined) => {
    if (id) {
        try {
            const {data} = await axiosInstance.get('3/movie/' + id);
            return data;
        }
        catch (e) {
            return e;
        }
    }
}