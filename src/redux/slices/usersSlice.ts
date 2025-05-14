import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../types/User.ts";
import {getUsers} from "../../services/axios.service.ts";
import {RootType} from "../../types/RootType.ts";

type UsersSliceType = { users: User[], isLoadedUsers: boolean }

const initialState: UsersSliceType = {users: [], isLoadedUsers: false};

const loadUsers = createAsyncThunk('usersSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await getUsers();
            return thunkAPI.fulfillWithValue(users);
        } catch {
            return thunkAPI.rejectWithValue(false);
        }
    }
);

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state, action);
            })
            .addMatcher(isFulfilled(loadUsers), (state) => {
                state.isLoadedUsers = true;
            })
})

export const usersSliceActions = {
    ...usersSlice.actions, loadUsers
}

export const selectUsersSlice = (state: RootType) => state.usersSlice;