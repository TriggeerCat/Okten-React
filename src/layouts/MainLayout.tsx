import {Outlet, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Users} from "../types/Users.ts";
import UserComponent from "../components/UserComponent.tsx";

const MainLayout = () => {

    const [users, setUsers] = useState<Users[] | null>(null);

    const fetchData = async (path: string) => {
        const response = await fetch(path);
        const data: Record<string, unknown> = await response.json();
        setUsers(data?.users as Users[]);
    }

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        const pg = query.get('page');
        if (pg) fetchData('https://dummyjson.com/users?skip=' + (+pg - 1) * 30).then();
    }, [query]);

    return (
        <div className='flex'>
            <div className='p-2 w-1/2'>
                <button onClick={() => {
                    const pg = query.get('page');

                    if (pg) {
                        let currentPage = +pg;
                        if (currentPage > 1) setQuery({page: (--currentPage).toString()});
                    }
                }} className='mx-2 border-2 text-xl p-1 w-50'>Previous
                </button>
                <button onClick={() => {
                    const pg = query.get('page');

                    if (pg) {
                        let currentPage = +pg;
                        if (currentPage < 7) setQuery({page: (++currentPage).toString()});
                    }
                }} className='mx-2 border-2 text-xl p-1 w-50'>Next
                </button>

                {
                    users ? users.map((value) => <UserComponent key={value.id} user={value}/>) : 'loading...'
                }
            </div>

            <Outlet/>
        </div>
    );
};

export default MainLayout;