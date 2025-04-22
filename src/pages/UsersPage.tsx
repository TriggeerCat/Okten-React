import {useEffect, useState} from "react";
import ObjectComponent from "../components/ObjectComponent.tsx";
import {Users} from "../types/Users.ts";

const UsersPage = () => {
    const [data, setData] = useState<Users[] | undefined>(undefined);

    const fetchData = async (path: string) => {
        const response = await fetch(path);
        const rawData: Record<string, unknown> = await response.json();
        setData(rawData?.users as Users[]);
    }

    useEffect(() => {
        fetchData('https://dummyjson.com/users').then();
    },[]);

    return (
        <ul>
            {
                data ? data.map((value, index) => <ObjectComponent key={index} value={value.firstName + ' ' + value.lastName}/>) : 'loading...'
            }
        </ul>
    );
};

export default UsersPage;