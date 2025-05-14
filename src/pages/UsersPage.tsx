import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {selectUsersSlice, usersSliceActions} from "../redux/slices/usersSlice.ts";

export const UsersPage = () => {
    const {users} = useAppSelector(selectUsersSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(usersSliceActions.loadUsers())
    }, [dispatch])

    return (
        <ul>
            {users.map(value => <li key={value.id}>{value.name}</li>)}
        </ul>
    );
};