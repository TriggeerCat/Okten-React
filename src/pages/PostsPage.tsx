import {useEffect, useState} from "react";
import ObjectComponent from "../components/ObjectComponent.tsx";
import {Posts} from "../types/Posts.ts";

const PostsPage = () => {
    const [data, setData] = useState<Posts[] | undefined>(undefined);

    const fetchData = async (path: string) => {
        const response = await fetch(path);
        const rawData: Record<string, unknown> = await response.json();
        setData(rawData?.posts as Posts[]);
        }

    useEffect(() => {
        fetchData('https://dummyjson.com/posts').then();
    },[]);

    return (
        <ul>
            {
                data ? data.map((value, index) => <ObjectComponent key={index} value={value.title}/>) : 'loading...'
            }
        </ul>
    );
};

export default PostsPage;