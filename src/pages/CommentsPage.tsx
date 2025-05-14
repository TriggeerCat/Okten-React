import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {commentsSliceActions, selectCommentsSlice} from "../redux/slices/commentsSlice.ts";

export const CommentsPage = () => {
    const {comments} = useAppSelector(selectCommentsSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentsSliceActions.loadComments())
    }, [dispatch])

    return (
        <ul>
            {comments.map(value => <li key={value.id}>{value.name}</li>)}
        </ul>
    );
};