import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {Post} from "../../types/Post.ts";
import {getPosts} from "../../services/axios.service.ts";

type PostsSliceType = { posts: Post[], isLoadedPosts: boolean }

const initialState: PostsSliceType = {posts: [], isLoadedPosts: false};

const loadPosts = createAsyncThunk('postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await getPosts();
            return thunkAPI.fulfillWithValue(posts);
        } catch {
            return thunkAPI.rejectWithValue(false);
        }
    }
);

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action) => {
                console.log(state, action);
            })
            .addMatcher(isFulfilled(loadPosts), (state) => {
                state.isLoadedPosts = true;
            })
})

export const postsSliceActions = {
    ...postsSlice.actions, loadPosts
}

export const selectPostsSlice = (state: RootState) => state.postsSlice;