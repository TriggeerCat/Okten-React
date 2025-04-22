import {useEffect, useState} from "react";
import {Users} from "../types/Users.ts";
import UserComponent from "../components/UserComponent.tsx";

const MainLayout = () => {

    const [users, setUsers] = useState<Users[] | undefined>(undefined);

    const fetchData = async (path: string) => {
        const response = await fetch(path);
        const data: Record<string, unknown> = await response.json();
        setUsers(data?.users as Users[]);
    }

    useEffect(() => {
        fetchData('https://dummyjson.com/users').then();
    }, []);

    return (
        <>
            <div className='p-2'>
                {
                    users ? users.map((value) => <UserComponent key={value.id} user={value}/>) : 'loading...'
                }
            </div>
        </>
    );
};

export default MainLayout;