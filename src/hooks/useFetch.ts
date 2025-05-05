import {useEffect, useState} from "react";

export const useFetch = <T>(url: string): T | null  => {
    const [data, setData] = useState<T | null>(null);

    const fetchData= async (url: string)=> {
        const response = await fetch(url);
        const rawData = await response.json();
        setData(rawData);
    }

    useEffect(() => {
        fetchData(url).then();
    }, [url]);

    return data;
}