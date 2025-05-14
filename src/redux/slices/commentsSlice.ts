import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {MyComment} from "../../types/MyComment.ts";
import {getComments} from "../../services/axios.service.ts";

type CommentsSliceType = { comments: MyComment[], isLoadedComments: boolean }

const initialState: CommentsSliceType = {comments: [], isLoadedComments: false};

const loadComments = createAsyncThunk('commentsSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            const comments = await getComments();
            return thunkAPI.fulfillWithValue(comments);
        } catch {
            return thunkAPI.rejectWithValue(false);
        }
    }
);

export const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action: PayloadAction<MyComment[]>) => {
                state.comments = action.payload;
            })
            .addCase(loadComments.rejected, (state, action) => {
                console.log(state, action);
            })
            .addMatcher(isFulfilled(loadComments), (state) => {
                state.isLoadedComments = true;
            })
})

export const commentsSliceActions = {
    ...commentsSlice.actions, loadComments
}

export const selectCommentsSlice = (state: RootState) => state.commentsSlice;