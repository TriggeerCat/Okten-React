import axios from "axios";
import {User} from "../types/User.ts";
import {Post} from "../types/Post.ts";
import {MyComment} from "../types/MyComment.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getUsers = async () => {
    const {data} = await axiosInstance.get<User[]>('/users');
    return data;
}

export const getPosts = async () => {
    const {data} = await axiosInstance.get<Post[]>('/posts');
    return data;
}

export const getComments = async () => {
    const {data} = await axiosInstance.get<MyComment[]>('/comments');
    return data;
}